import BufferList = require("bl");
import CID = require("cids");

interface IPFSInterface {
    add: (path: string, content: string, mode: string) => Promise<Buffer>;
    cat: (path: CID | Buffer | string) => Promise<string>;
    // get: (path:string) => 
}

interface IPFSGet {
    path: string;
    content: AsyncIterable<BufferList>;
    mode: number;
    mtime: { secs: number, nsecs: number };
}

type IPFSCat = AsyncIterable<Buffer>

interface IPFSAdd {
    path: string
    content: string
    mode?: number | string
    mtime?: number
}

export {
    IPFSInterface,
    IPFSGet,
    IPFSAdd,
    IPFSCat
}