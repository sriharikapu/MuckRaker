import { NextFunction, Request, Response } from 'express';
import { ethers } from 'ethers';

export const RESPONSE_LOCALS_ETH_ADDRESS = 'ethAddress'

const MetaMaskIDMiddleware = (request: Request, response: Response, next: NextFunction): void => {
    const ethAddress: string = request.query.id;

    response.locals[RESPONSE_LOCALS_ETH_ADDRESS] = ethAddress;

    next();
}

export { MetaMaskIDMiddleware };
