import axios, { AxiosRequestConfig } from "axios";
import FormData from 'form-data';
import { IPFSInterface } from "./IPFSInterface";
import CID from 'cids'

class IPFSImpl implements IPFSInterface {

    private readonly ipfsModule: any;

    public constructor(ipfsModule: any) {
        this.ipfsModule = ipfsModule;
    }

    add = async (path: string, content: string, mode: string): Promise<Buffer> => {
        let buff: Buffer = Buffer.alloc(0)
        try {
            for await (const result of this.ipfsModule.add({
                path,
                content,
                mode
            })) {
                buff = result.cid.multihash
            }
        } catch (e) {
            return Promise.reject();
        }

        if (buff.length === 0) return Promise.reject()

        return buff
    }

    cat = async (path: CID | Buffer | string): Promise<string> => {
        const chunks: Buffer[] = []

        for await (const chunk of this.ipfsModule.cat(path)) {
            chunks.push(chunk)
        }

        return Buffer.concat(chunks).toString()
    }

    id = async (): Promise<string> => {
        return this.ipfsModule.id()
    }
}

export { IPFSImpl };
