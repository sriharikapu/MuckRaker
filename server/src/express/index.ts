import bodyParser from 'body-parser';
import { keccak256 } from 'ethers/utils';
import express, { Request, Response } from 'express';
import { batchQueryIPFS } from '../ipfs/util';
import { contractGetAllProjects } from '../quorum/contracts/contractGetAllProjects';
import { contractGetProjects } from '../quorum/contracts/contractGetProjects';
import { Project, TempType } from '../types/ProjectModel';
import { MetaMaskIDMiddleware, RESPONSE_LOCALS_ETH_ADDRESS } from './middleware/MetaMaskIDMiddleware';
import { addProject } from './routes/add';
import { reportSet } from './routes/report';

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.post('/api/add', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const ownerAddr: string = response.locals[RESPONSE_LOCALS_ETH_ADDRESS];

    const fileContents: string = request.body.file;
    const fileName: string = request.body.name || keccak256(fileContents);

    const path: string = `${ownerAddr}${fileName}`

    const encodeFileContents: string = `${ownerAddr}!${fileName}!${fileContents}`

    const creationSuccess: boolean = await addProject(ownerAddr, path, encodeFileContents)

    response.status(200).json({ response: creationSuccess });
});

app.post('/api/fund', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const ownerAddr: string = response.locals[RESPONSE_LOCALS_ETH_ADDRESS];

    // const projectCID: string = 
})

app.post('/api/report', MetaMaskIDMiddleware, async (request: Request, response: Response) => {
    const ownerAddr: string = response.locals[RESPONSE_LOCALS_ETH_ADDRESS];

    const projectCID: string = request.query.projectId;

    const reportContents: string = request.body.file;

    const success: boolean = await reportSet(ownerAddr, projectCID, reportContents);

    response.status(200).json({ response: success })
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

