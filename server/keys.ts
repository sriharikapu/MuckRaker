require('dotenv').config()

type KeySet = {
    quorum_api: string,
    quorum_secret: string,
    ipfs_endpoint: string,
    ipfs_key: string,
    ipfs_user: string,
    ipfs_password: string
}

const config: KeySet = {
    ipfs_endpoint: process.env.IPFS_API_ENDPOINT!,
    quorum_secret: process.env.KALEIDO_KEY!,
    quorum_api: process.env.KALEIDO_URL!,
    ipfs_key: process.env.IPFS_KEY!,
    ipfs_password: process.env.IPFS_PASSWORD!,
    ipfs_user: process.env.IPFS_USER!
}

export {
    config
}