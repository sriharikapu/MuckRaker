import { IPFSProxy } from "../../ipfs"
import { keccak256 } from "ethers/utils"
import { encodeFileContents } from "./add"
import { contractSetReport } from "../../quorum/contracts/contractSetReport";


const reportSet = async (ownerAddr: string, projectCID: string, projectReportFileContents: string): Promise<boolean> => {
    const path: string = `${projectCID}${keccak256(projectReportFileContents)}`;

    const reportCID: Buffer = await IPFSProxy.add(path,
        encodeFileContents(ownerAddr, path, projectReportFileContents),
        '777');

    const reportCIDB64: string = reportCID.toString('base64')

    const setReportSuccess: boolean = await contractSetReport(projectCID, reportCIDB64)

    return setReportSuccess;
}

export {
    reportSet
}