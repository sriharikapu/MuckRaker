import { MuckRakerContract } from "../../../contracts/types/MuckRakerContract";
import { MuckRakerContractFactory } from "../../../contracts/types/MuckRakerContractFactory";
import { config } from "../../keys";
import { QuoromMasterWallet } from "../QuoromWallet";


const contractGetProjects = async (ownerAddress: string): Promise<string[]> => {
    const contract: MuckRakerContract = MuckRakerContractFactory.connect(config.quorum_contract_address, QuoromMasterWallet);
    const result = await contract.functions.get_projects(ownerAddress)
    return result;
}

export {
    contractGetProjects
}