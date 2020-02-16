import bodyParser from 'body-parser';
import { keccak256 } from 'ethers/utils';
import express, { Request, Response } from 'express';
import { IPFSProxy } from '../ipfs';
import { contractCreateProject } from '../quorum/contracts/contractCreateProduct';
import { contractGetAllProjects } from '../quorum/contracts/contractGetAllProjects';
import { contractGetProjects } from '../quorum/contracts/contractGetProjects';
import { TempType, Project } from '../types/ProjectModel';
import { MetaMaskIDMiddleware, RESPONSE_LOCALS_ETH_ADDRESS } from './middleware/MetaMaskIDMiddleware';
import { batchQueryIPFS } from '../ipfs/util'
import { addProjectRoute } from './routes/add';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.post('/api/add', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const ownerAddr: string = response.locals[RESPONSE_LOCALS_ETH_ADDRESS];

    const fileContents: string = request.body.file;
    const fileName: string = request.body.name || keccak256(fileContents);

    const path: string = `${ownerAddr}${fileName}`

    const encodeFileContents: string = `${ownerAddr}!${fileName}!${fileContents}`

    const creationSuccess: boolean = await addProjectRoute(ownerAddr, path, encodeFileContents)

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

