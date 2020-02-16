import { IPFSProxy } from '../../ipfs';
import { contractCreateProject } from '../../quorum/contracts/contractCreateProduct';
import { Project } from '../../types/ProjectModel';


const encodeFileContents = (ownAddr: string, path: string, fileContents: string): string => {
    return `${ownAddr}!${path}!${fileContents}`
}

const decodeFileContents = <T>(ipfsContents: string): Project<T> => {
    const parts: string[] = ipfsContents.split('!');
    return {
        ownerAddress: parts[0],
        name: parts[1],
        contents: (JSON.parse(parts[2]) as T)
    }
}


const addProject = async (ownerAddr: string, path: string, fileContents: string): Promise<boolean> => {

    const fileCID: Buffer = await IPFSProxy.add(path, fileContents, '777');
    const fileCIDB64: string = fileCID.toString('base64')

    const creationSuccess: boolean = await contractCreateProject(ownerAddr, fileCIDB64)

    return creationSuccess;
}

export {
    addProject,
    encodeFileContents,
    decodeFileContents
};
