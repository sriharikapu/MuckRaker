// File: `./contracts/SimpleStorage.sol`
pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;

contract MuckRakerContract {
    mapping(address => string[]) ownsProducts;
    mapping(string => address) isOwnedBy;

    mapping(address => string[]) isFunding;
    mapping(string => address[]) isFundedBy;

    function create_project(address ownerAddress, string memory productCID)
        public
        returns (uint256)
    {
        string[] storage products = ownsProducts[ownerAddress];
        products.push(productCID);

        isOwnedBy[productCID] = ownerAddress;

        return products.length;
    }

    function fund_project(address funderAddress, string memory productCID)
        public
        returns (string memory)
    {
        string[] storage funding = isFunding[funderAddress];
        funding.push(productCID);

        address[] storage fundedBy = isFundedBy[productCID];
        fundedBy.push(funderAddress);

        return productCID;
    }

    function get_funders(string memory productCID)
        public
        view
        returns (address[] memory)
    {
        return isFundedBy[productCID];
    }

    function get_funding(address funderAddress)
        public
        view
        returns (string[] memory)
    {
        return isFunding[funderAddress];
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
