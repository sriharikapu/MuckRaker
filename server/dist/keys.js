"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
var config = {
    ipfs_endpoint: process.env.IPFS_API_ENDPOINT,
    quorum_secret: process.env.KALEIDO_KEY,
    quorum_api: process.env.KALEIDO_URL,
    ipfs_key: process.env.IPFS_KEY,
    ipfs_password: process.env.IPFS_PASSWORD,
    ipfs_user: process.env.IPFS_USER
};
exports.config = config;
//# sourceMappingURL=keys.js.map