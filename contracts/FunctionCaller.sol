// SPDX-License-Identifier: MIT
pragma solidity 0.6.11;
import "./ITroveManager.sol";
import "./ILQTYStaking.sol";
import "./ILQTYToken.sol";
import "./ILUSDToken.sol";
import "./IERC2612.sol";
import "./IERC20.sol";
import "./IStabilityPool.sol";
import "./ILiquityBase.sol";
import "./ISortedTroves.sol";
import "./IPriceFeed.sol";
import "./LiquityMath.sol";
import "./console.sol";
import "./SafeMath.sol";
contract FunctionCaller {

    ITroveManager troveManager;
    address public troveManagerAddress;

    ISortedTroves sortedTroves;
    address public sortedTrovesAddress;

    IPriceFeed priceFeed;
    address public priceFeedAddress;

    // --- Dependency setters ---

    function setTroveManagerAddress(address _troveManagerAddress) external {
        troveManagerAddress = _troveManagerAddress;
        troveManager = ITroveManager(_troveManagerAddress);
    }
    
    function setSortedTrovesAddress(address _sortedTrovesAddress) external {
        troveManagerAddress = _sortedTrovesAddress;
        sortedTroves = ISortedTroves(_sortedTrovesAddress);
    }

     function setPriceFeedAddress(address _priceFeedAddress) external {
        priceFeedAddress = _priceFeedAddress;
        priceFeed = IPriceFeed(_priceFeedAddress);
    }

    // --- Non-view wrapper functions used for calculating gas ---
    
    function troveManager_getCurrentICR(address _address, uint _price) external view  returns (uint) {
        return troveManager.getCurrentICR(_address, _price);  
    }

    function sortedTroves_findInsertPosition(uint _NICR, address _prevId, address _nextId) external view returns (address, address) {
        return sortedTroves.findInsertPosition(_NICR, _prevId, _nextId);
    }
}