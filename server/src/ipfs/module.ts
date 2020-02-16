const ipfsm = require('ipfs-http-client')
import { config } from '../keys'

const url: string = `https://${config.quorum_secret}@${config.ipfs_endpoint}/v0`

const IPFSModule = ipfsm(url)

export {
    IPFSModule
}