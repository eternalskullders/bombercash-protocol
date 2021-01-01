const {
  sasPools,
  INITIAL_SAS_FOR_DAI_SAC,
  INITIAL_SAS_FOR_DAI_SAS,
} = require('./pools');

// Pools
// deployed first
const Share = artifacts.require('Share');
const InitialShareDistributor = artifacts.require('InitialShareDistributor');

// ============ Main Migration ============

async function migration(deployer, network, accounts) {
  const unit = web3.utils.toBN(10 ** 18);
  const totalBalanceForUSDTSAC = unit.muln(INITIAL_SAS_FOR_DAI_SAC)
  const totalBalanceForUSDTSAS = unit.muln(INITIAL_SAS_FOR_DAI_SAS)
  const totalBalance = totalBalanceForUSDTSAC.add(totalBalanceForUSDTSAS);

  const share = await Share.deployed();

  const lpPoolUSDTSAC = artifacts.require(sasPools.USDTSAC.contractName);
  const lpPoolUSDTSAS = artifacts.require(sasPools.USDTSAS.contractName);

  await deployer.deploy(
    InitialShareDistributor,
    share.address,
    lpPoolUSDTSAC.address,
    totalBalanceForUSDTSAC.toString(),
    lpPoolUSDTSAS.address,
    totalBalanceForUSDTSAS.toString(),
  );
  const distributor = await InitialShareDistributor.deployed();

  await share.mint(distributor.address, totalBalance.toString());
  console.log(`Deposited ${INITIAL_SAS_FOR_DAI_SAC} SAS to InitialShareDistributor.`);

  console.log(`Setting distributor to InitialShareDistributor (${distributor.address})`);
  await lpPoolUSDTSAC.deployed().then(pool => pool.setRewardDistribution(distributor.address));
  await lpPoolUSDTSAS.deployed().then(pool => pool.setRewardDistribution(distributor.address));

  await distributor.distribute();
}

module.exports = migration;
