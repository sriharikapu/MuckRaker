require('dotenv').config()

type KeySet = {
    quorum_api: string,
    quorum_secret: string,
    ipfs_endpoint: string,
    ipfs_user: string,
    ipfs_password: string,
    quorum_contract_address: string,
    quorom_rpc_user: string,
    quorom_rpc_password: string,
    quorom_mnuemonic: string
}

const config: KeySet = {
    ipfs_endpoint: process.env.IPFS_API_ENDPOINT!,
    quorum_secret: process.env.KALEIDO_KEY!,
    quorum_api: process.env.KALEIDO_URL!,
    ipfs_password: process.env.IPFS_PASSWORD!,
    ipfs_user: process.env.IPFS_USER!,
    quorum_contract_address: process.env.QUOROM_CONTRACT_ADDRESS!,
    quorom_rpc_password: process.env.QUOROM_RPC_PASSWORD!,
    quorom_rpc_user: process.env.QUOROM_RPC_USER!,
    quorom_mnuemonic: process.env.QUOROM_RPC_MNUEMONIC!
}


export {
    config
}