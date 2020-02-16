import { MuckRakerContract } from "../../../contracts/types/MuckRakerContract";
import { MuckRakerContractFactory } from "../../../contracts/types/MuckRakerContractFactory";
import { config } from "../../keys";
import { QuoromMasterWallet } from "../QuoromWallet";


const contractSetReport = async (projectCID: string, projectReportCID: string): Promise<boolean> => {
    const contract: MuckRakerContract = MuckRakerContractFactory.connect(config.quorum_contract_address, QuoromMasterWallet);
    try {
        const result = await contract.functions.set_project_report(projectCID, projectReportCID);
    } catch (e) {
        return Promise.resolve(false);
    }
    return Promise.resolve(true);
}

export {
    contractSetReport
}