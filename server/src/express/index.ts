import express, { Request, Response } from 'express'
import { MetaMaskIDMiddleware, RESPONSE_LOCALS_ETH_ADDRESS } from './middleware/MetaMaskIDMiddleware';
import { IPFSProxy } from '../ipfs';
import { keccak256 } from 'ethers/utils';
import { contractCreateProduct } from '../quorum/contracts/contractCreateProduct';
import bodyParser from 'body-parser'
import { ethers } from 'ethers';
import { contractGetProducts } from '../quorum/contracts/contractGetProducts';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/api/add', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const ownerAddr: string = response.locals[RESPONSE_LOCALS_ETH_ADDRESS];

    console.log("OwnerAddress", ownerAddr)

    const fileContents: string = request.body.file;
    const fileName: string = request.body.name || keccak256(fileContents);

    const path: string = `${ownerAddr}${fileName}`

    const encodeFileContents: string = `${ownerAddr}!${fileName}!${fileContents}`

    const fileCID: Buffer = await IPFSProxy.add(path, encodeFileContents, '777');

    const fileCIDB64: string = fileCID.toString('base64')

    console.log('Uploaded to CID', fileCID, fileCID.length)

    const productSuccess: boolean = await contractCreateProduct(ownerAddr, fileCIDB64)

    console.log(productSuccess)

    response.status(200).json({ response: true });
});

type Product = {
    name: string,
    ownerAddress: string,
    contents: string
}

const parseIPFSStorageRecordToProduct = (ipfsContents: string): Product => {
    const parts: string[] = ipfsContents.split('!');
    return {
        ownerAddress: parts[0],
        name: parts[1],
        contents: parts[2]
    }
}

app.get('/api/products', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const ownerAddr: string = response.locals[RESPONSE_LOCALS_ETH_ADDRESS];

    try {
        const productCIDs: string[] = await contractGetProducts(ownerAddr);

        console.log(productCIDs)

        const products: Product[] = [];

        for await (const cid of productCIDs) {
            const b64Buffer: Buffer = new Buffer(cid, 'base64');

            const fileContents: string = await IPFSProxy.cat(b64Buffer);

            const product: Product = parseIPFSStorageRecordToProduct(fileContents);

            products.push(product);
        }

        response.status(200).json({ response: products })
    } catch (e) {
        console.log(e)
        response.sendStatus(500);
    }
})

export {
    app
}