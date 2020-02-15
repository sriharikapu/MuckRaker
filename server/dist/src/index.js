"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var keys_1 = require("../keys");
var ipfs_1 = require("./ipfs");
console.log(keys_1.config.ipfs_endpoint);
console.log(keys_1.config);
var url = "https://" + keys_1.config.quorum_secret + "@" + keys_1.config.ipfs_endpoint + "/v0";
axios_1.default.get(url + '/id').then(function (response) {
    console.log(response.data);
}).catch(console.log);
var ipfs = new ipfs_1.IPFSImpl(url);
ipfs.add('/hi', 'content', '755');
