// https://docs.stand.cash/mechanisms/yield-farming
const INITIAL_SAC_FOR_POOLS = 70000;
const INITIAL_SAS_FOR_DAI_SAC = 600000;
const INITIAL_SAS_FOR_DAI_SAS = 230000;

const POOL_START_DATE = Date.parse('2021-01-02T12:00:00Z') / 1000;

const sacPools = [
  { contractName: 'SACDAIPool', token: 'DAI' },
  { contractName: 'SACBACPool', token: 'BAC' },
  { contractName: 'SACUSDCPool', token: 'USDC' },
  { contractName: 'SACUSDTPool', token: 'USDT' },
  { contractName: 'SACESDPool', token: 'ESD' },
  { contractName: 'SACFRAXPool', token: 'FRAX' },
  { contractName: 'SACAETHPool', token: 'AETH' },
];

const sasPools = {
  USDTSAC: { contractName: 'USDTSACLPTokenSharePool', token: 'DAI_SAC-LPv2' },
  USDTSAS: { contractName: 'USDTSASLPTokenSharePool', token: 'DAI_SAS-LPv2' },
}

module.exports = {
  POOL_START_DATE,
  INITIAL_SAC_FOR_POOLS,
  INITIAL_SAS_FOR_DAI_SAC,
  INITIAL_SAS_FOR_DAI_SAS,
  sacPools,
  sasPools,
};
