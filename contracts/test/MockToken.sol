pragma solidity ^0.6.0;

import '@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol';
import '../owner/Operator.sol';

contract MockToken is ERC20Burnable, Operator {
    /**
     * @notice Constructs the Stand Cash ERC-20 contract.
     */
    constructor(string memory _name, string memory _symbol, uint8 _decimals) public ERC20(_name, _symbol) {
        _setupDecimals(_decimals);
        _mint(msg.sender, 100000 * 10 ** uint(_decimals));
    }

    /**
     * @notice Operator mints dino cash to a recipient
     * @param recipient_ The address of recipient
     * @param amount_ The amount of dino cash to mint to
     * @return whether the process has been done
     */
    function mint(address recipient_, uint256 amount_)
        public
        onlyOperator
        returns (bool)
    {
        uint256 balanceBefore = balanceOf(recipient_);
        _mint(recipient_, amount_);
        uint256 balanceAfter = balanceOf(recipient_);

        return balanceAfter > balanceBefore;
    }
}
