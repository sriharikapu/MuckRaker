// File: `./contracts/SimpleStorage.sol`
pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;

contract MuckRakerContract {
    mapping(address => string[]) projects;
    mapping(string => address) owner;

    function create_product(address ownerAddress, string memory productCID)
        public
        returns (bool success)
    {
        string[] storage products = projects[ownerAddress];
        products.push(productCID);

        owner[productCID] = ownerAddress;

        return true;
    }

    function get_owner(string memory productCID) public view returns (address) {
        return owner[productCID];
    }

    function get_projects(address ownerAddress)
        public
        view
        returns (string[] memory)
    {
        return projects[ownerAddress];
    }
}
