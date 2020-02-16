import { ethers } from 'ethers';
import { JsonRpcProvider } from 'ethers/providers';
import { config } from '../keys';

type KaleidoPackage = {
    url: string,
    password: string,
    user: string
}

const kaleidoPackage: KaleidoPackage = {
    url: config.quorum_api,
    user: config.quorom_rpc_user,
    password: config.quorom_rpc_password
};

const provider: JsonRpcProvider = new ethers.providers.JsonRpcProvider(kaleidoPackage);

export { provider as QuoromProvider };

