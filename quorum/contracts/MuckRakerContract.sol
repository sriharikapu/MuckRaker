// File: `./contracts/SimpleStorage.sol`
pragma solidity ^0.6.1;
pragma experimental ABIEncoderV2;

contract MuckRakerContract {
    mapping(address => string[]) ownsProjects;
    mapping(string => address) isOwnedBy;

    mapping(address => string[]) isFunding;
    mapping(string => address[]) isFundedBy;

    mapping(string => bool) projectCIDUsed;
    string[] _projects;

    constructor() public {
        _projects = new string[](10);
    }

    function get_all_projects() public view returns (string[] memory projects) {
        return _projects;
    }

    function create_project(address ownerAddress, string memory projectCID)
        public
        returns (uint256)
    {
        require(
            projectCIDUsed[projectCID] == false,
            "Project CID has already been used"
        );

        projectCIDUsed[projectCID] = true;

        // updates the projects by the journalist
        string[] storage projects = ownsProjects[ownerAddress];
        projects.push(projectCID);

        isOwnedBy[projectCID] = ownerAddress;

        string[] storage globalProjects = _projects;
        globalProjects.push(projectCID);

        return projects.length;
    }

    function fund_project(address funderAddress, string memory projectCID)
        public
        returns (string memory)
    {
        string[] storage funding = isFunding[funderAddress];
        funding.push(projectCID);

        address[] storage fundedBy = isFundedBy[projectCID];
        fundedBy.push(funderAddress);

        return projectCID;
    }

    function get_funders(string memory projectCID)
        public
        view
        returns (address[] memory)
    {
        return isFundedBy[projectCID];
    }

    function get_funding(address funderAddress)
        public
        view
        returns (string[] memory)
    {
        return isFunding[funderAddress];
    }

    function get_owner(string memory projectCID) public view returns (address) {
        return isOwnedBy[projectCID];
    }

    function get_projects(address ownerAddress)
        public
        view
        returns (string[] memory)
    {
        return ownsProjects[ownerAddress];
    }
}
