"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var keys_1 = require("./keys");
var ipfs_1 = require("./src/ipfs");
var ipfsm = require('ipfs-http-client');
console.log(keys_1.config.ipfs_endpoint);
console.log(keys_1.config);
var url = keys_1.config.quorum_secret + "@" + keys_1.config.ipfs_endpoint;
var ipfs = new ipfs_1.IPFSImpl(url);
var ipfsConn = ipfsm({
    host: url,
    protocol: 'https'
});
ipfsConn.id().then(console.log);
// ipfs.id().then(console.log)
// ipfs.add('/hi.txt', 'content123', '755')
//# sourceMappingURL=index.js.map