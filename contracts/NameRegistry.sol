// SPDX-License-Identifier: MIT
pragma solidity 0.6.11;

contract NameRegistry {
    address public owner;
    mapping(string => address) public registry;

    event ContractAddressUpdated(string indexed _name, address indexed _addr);
    event NewContractRegistered(string indexed _name, address indexed _addr);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor() public {
        owner = msg.sender;
    }

    function getAddress(string memory name) external view returns (address) {
        return registry[name];
    }

    function isOwner() external view returns (bool) {
        return msg.sender == owner;
    }

    function renounceOwnership() external onlyOwner {
        emit OwnershipTransferred(owner, address(0));
        owner = address(0);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "Invalid new owner address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    function registerContract(string memory name, address addr) external onlyOwner returns (bool) {
        require(addr != address(0), "Invalid contract address");
        require(registry[name] == address(0), "Name is already registered");

        registry[name] = addr;
        emit NewContractRegistered(name, addr);
        return true;
    }

    function updateAddress(string memory name, address addr) external onlyOwner returns (bool) {
        require(addr != address(0), "Invalid contract address");
        require(registry[name] != address(0), "Name is not registered");

        registry[name] = addr;
        emit ContractAddressUpdated(name, addr);
        return true;
    }
}
