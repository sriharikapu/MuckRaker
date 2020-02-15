import express, { Request, Response } from 'express'
import { MetaMaskIDMiddleware } from './middleware/MetaMaskIDMiddleware';

const app: express.Application = express();


app.get('/hi', (request: Request, response: Response) => {
    response.status(200).json({ data: 'hi' })
});

app.put('/api/add', MetaMaskIDMiddleware, (request: Request, response: Response) => {
    response.sendStatus(200);
})

export {
    app
}