// File: `./migrations/2_deploy_simplestorage.js`

var MuckRakerContract = artifacts.require("MuckRakerContract");

module.exports = function (deployer) {
    deployer.deploy(MuckRakerContract)
};