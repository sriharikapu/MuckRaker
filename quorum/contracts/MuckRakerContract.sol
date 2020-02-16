// File: `./contracts/SimpleStorage.sol`
pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;

contract MuckRakerContract {
    mapping(address => string[]) ownsProducts;
    mapping(string => address) isOwnedBy;

    mapping(address => string[]) isFunding;
    mapping(string => address[]) isFundedBy;

    function create_product(address ownerAddress, string memory productCID)
        public
        returns (bool success)
    {
        string[] storage products = ownsProducts[ownerAddress];
        products.push(productCID);

        isOwnedBy[productCID] = ownerAddress;

        return true;
    }

    function get_owner(string memory productCID) public view returns (address) {
        return isOwnedBy[productCID];
    }

    function get_projects(address ownerAddress)
        public
        view
        returns (string[] memory)
    {
        return ownsProducts[ownerAddress];
    }
}
