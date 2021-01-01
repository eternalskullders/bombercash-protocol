const knownContracts = require('./known-contracts');
const { POOL_START_DATE } = require('./pools');
const IERC20 = artifacts.require('IERC20');

const Cash = artifacts.require('Cash');
const Share = artifacts.require('Share');
const Oracle = artifacts.require('Oracle');
const MockToken = artifacts.require('MockToken');

const USDTSACLPToken_SASPool = artifacts.require('USDTSACLPTokenSharePool')
const USDTSASLPToken_SASPool = artifacts.require('USDTSASLPTokenSharePool')

const UniswapV2Factory = artifacts.require('UniswapV2Factory');

module.exports = async (deployer, network, accounts) => {
  const devAddr = accounts[0]
  const uniswapFactory = ['dev', 'het'].includes(network)
    ? await UniswapV2Factory.deployed()
    : await UniswapV2Factory.at(knownContracts.UniswapV2Factory[network]);
  const usdt = ['dev', 'het'].includes(network)
    ? await MockToken.deployed()
    : await IERC20.at(knownContracts.USDT[network]);

  const oracle = await Oracle.deployed();

  const usdt_sac_lpt = await oracle.pairFor(uniswapFactory.address, Cash.address, usdt.address);
  const usdt_sas_lpt = await oracle.pairFor(uniswapFactory.address, Share.address, usdt.address);

  await deployer.deploy(USDTSACLPToken_SASPool, Share.address, usdt_sac_lpt, POOL_START_DATE, devAddr);
  await deployer.deploy(USDTSASLPToken_SASPool, Share.address, usdt_sas_lpt, POOL_START_DATE, devAddr);
};
