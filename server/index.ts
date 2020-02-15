import { app } from "./src/express"
import { IPFSProxy } from './src/ipfs'

const PORT = process.env.PORT || 8080

const main = async () => {
    const cid: Buffer = (await IPFSProxy.add('hi.txt', 'string', '775'))
    console.log(await IPFSProxy.cat(cid))
}

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`)
})