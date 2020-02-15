// File: `./migrations/2_deploy_simplestorage.js`

var MuckRakerContract = artifacts.require("MuckRakerContract");

module.exports = function (deployer) {
    // Pass 42 to the contract as the first constructor parameter
    deployer.deploy(MuckRakerContract, {})
};