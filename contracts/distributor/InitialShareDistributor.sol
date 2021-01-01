pragma solidity ^0.6.0;

import '@openzeppelin/contracts/math/SafeMath.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';

import '../interfaces/IDistributor.sol';
import '../interfaces/IRewardDistributionRecipient.sol';

contract InitialShareDistributor is IDistributor {
    using SafeMath for uint256;

    event Distributed(address pool, uint256 cashAmount);

    bool public once = true;

    IERC20 public share;
    IRewardDistributionRecipient public usdtsacLPPool;
    uint256 public usdtsacInitialBalance;
    IRewardDistributionRecipient public usdtsasLPPool;
    uint256 public usdtsasInitialBalance;

    constructor(
        IERC20 _share,
        IRewardDistributionRecipient _usdtsacLPPool,
        uint256 _usdtsacInitialBalance,
        IRewardDistributionRecipient _usdtsasLPPool,
        uint256 _usdtsasInitialBalance
    ) public {
        share = _share;
        usdtsacLPPool = _usdtsacLPPool;
        usdtsacInitialBalance = _usdtsacInitialBalance;
        usdtsasLPPool = _usdtsasLPPool;
        usdtsasInitialBalance = _usdtsasInitialBalance;
    }

    function distribute() public override {
        require(
            once,
            'InitialShareDistributor: you cannot run this function twice'
        );

        share.transfer(address(usdtsacLPPool), usdtsacInitialBalance);
        usdtsacLPPool.notifyRewardAmount(usdtsacInitialBalance);
        emit Distributed(address(usdtsacLPPool), usdtsacInitialBalance);

        share.transfer(address(usdtsasLPPool), usdtsasInitialBalance);
        usdtsasLPPool.notifyRewardAmount(usdtsasInitialBalance);
        emit Distributed(address(usdtsasLPPool), usdtsasInitialBalance);

        once = false;
    }
}
