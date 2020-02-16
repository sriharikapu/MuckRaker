

import { MuckRakerContract } from "../../../contracts/types/MuckRakerContract"
import { MuckRakerContractFactory } from "../../../contracts/types/MuckRakerContractFactory"
import { config } from "../../keys"
import { QuoromMasterWallet } from "../QuoromWallet"


const contractGetAllProjects = async (): Promise<string[]> => {
    const contract: MuckRakerContract = MuckRakerContractFactory.connect(config.quorum_contract_address, QuoromMasterWallet);
    const result = await contract.functions.get_all_projects()
    return result
}


export { contractGetAllProjects }
