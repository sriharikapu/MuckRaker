import axios, { AxiosResponse } from 'axios'
import { config } from "./keys"

console.log(config.ipfs_endpoint)
console.log(config)

const url: string = `https://${config.quorum_secret}@${config.ipfs_endpoint}/v0`

axios.get(url + '/id').then((response: AxiosResponse<any>) => {
    console.log(response.data)
}).catch(console.log)