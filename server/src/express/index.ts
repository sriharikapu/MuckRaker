import bodyParser from 'body-parser';
import { keccak256 } from 'ethers/utils';
import express, { Request, Response } from 'express';
import { IPFSProxy } from '../ipfs';
import { contractCreateProject } from '../quorum/contracts/contractCreateProduct';
import { contractGetAllProjects } from '../quorum/contracts/contractGetAllProjects';
import { contractGetProjects } from '../quorum/contracts/contractGetProjects';
import { TempType } from '../types/ProjectModel';
import { MetaMaskIDMiddleware, RESPONSE_LOCALS_ETH_ADDRESS } from './middleware/MetaMaskIDMiddleware';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/api/add', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const ownerAddr: string = response.locals[RESPONSE_LOCALS_ETH_ADDRESS];

    const fileContents: string = request.body.file;
    const fileName: string = request.body.name || keccak256(fileContents);

    const path: string = `${ownerAddr}${fileName}`

    const encodeFileContents: string = `${ownerAddr}!${fileName}!${fileContents}`

    const fileCID: Buffer = await IPFSProxy.add(path, encodeFileContents, '777');
    const fileCIDB64: string = fileCID.toString('base64')

    const creationSuccess: boolean = await contractCreateProject(ownerAddr, fileCIDB64)

    response.status(200).json({ response: creationSuccess });
});

app.post('/api/fund', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const ownerAddr: string = response.locals[RESPONSE_LOCALS_ETH_ADDRESS];

    // const projectCID: string = 
})

app.get('/api/all_projects', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const projectCIDs: string[] = (await contractGetAllProjects()).filter(str => str.length !== 0);

    const projects: Project<TempType>[] = await batchQueryIPFS<TempType>(projectCIDs);

    response.status(200).json({ response: projects })
})

type Project<T> = {
    name: string,
    ownerAddress: string,
    contents: T
}

const parseIPFSStorageRecord = <T>(ipfsContents: string): Project<T> => {
    const parts: string[] = ipfsContents.split('!');
    return {
        ownerAddress: parts[0],
        name: parts[1],
        contents: (JSON.parse(parts[2]) as T)
    }
}

const batchQueryIPFS = async <T>(projectCIDArray: string[]): Promise<Project<T>[]> => {
    const projects: Project<T>[] = [];

    for await (const cid of projectCIDArray) {
        const b64Buffer: Buffer = new Buffer(cid, 'base64');

        const fileContents: string = await IPFSProxy.cat(b64Buffer);

        const project: Project<T> = parseIPFSStorageRecord<T>(fileContents);

        projects.push(project);
    }

    return projects;
}

app.get('/api/projects', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const ownerAddr: string = response.locals[RESPONSE_LOCALS_ETH_ADDRESS];

    try {
        const projectCIDs: string[] = await contractGetProjects(ownerAddr);

        const projects: Project<TempType>[] = await batchQueryIPFS<TempType>(projectCIDs);

        response.status(200).json({ response: projects })
    } catch (e) {
        console.log(e)
        response.sendStatus(500);
    }
})

export { app };

