const knownContracts = require('./known-contracts');
const { sacPools, POOL_START_DATE } = require('./pools');
const fs = require('fs');
const path = require('path');
const util = require('util');

// Tokens
// deployed first
const Cash = artifacts.require('Cash');
const MockToken = artifacts.require('MockToken');

// ============ Main Migration ============
module.exports = async (deployer, network, accounts) => {
  const devAddr = accounts[0];
  const tokens = {};
  for await (const { contractName, token } of sacPools) {
    let decimals = ['USDC', 'USDT'].includes(token) ? 6 : 18;
    let contractAddress = knownContracts[token][network];
    if (!contractAddress) {
      const tokenContract = token === 'USDT' ? await MockToken.deployed() : await MockToken.new(token, token, decimals);
      contractAddress = tokenContract.address;
    }

    console.log(`contract address of ${token} is ${contractAddress}`);
    if (!contractAddress) {
      // network is mainnet, so MockToken is not available
      throw new Error(`Address of ${contractAddress} is not registered on migrations/known-contracts.js!`);
    }

    const contract = artifacts.require(contractName);
    await deployer.deploy(contract, Cash.address, contractAddress, POOL_START_DATE, devAddr);

    tokens[token] = {
      poolName: contractName,
      poolAddress: contract.address,
      tokenName: token,
      tokenAddress: contractAddress,
      decimals
    }
  }

  const writeFile = util.promisify(fs.writeFile);
  const tokenPath = path.resolve(__dirname, `../build/tokens.${network}.json`);
  await writeFile(tokenPath, JSON.stringify(tokens, null, 2));

  console.log(`Exported tokens into ${tokenPath}`);
};
