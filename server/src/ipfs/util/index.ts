import { Project } from "../../types/ProjectModel";
import { IPFSProxy } from "..";
import { decodeFileContents } from '../../express/routes/add'

const batchQueryIPFS = async <T>(projectCIDArray: string[]): Promise<Project<T>[]> => {
    const projects: Project<T>[] = [];

    for await (const cid of projectCIDArray) {
        const b64Buffer: Buffer = new Buffer(cid, 'base64');

        const fileContents: string = await IPFSProxy.cat(b64Buffer);

        const project: Project<T> = decodeFileContents<T>(fileContents);

        projects.push(project);
    }

    return projects;
}

export {
    batchQueryIPFS,
}