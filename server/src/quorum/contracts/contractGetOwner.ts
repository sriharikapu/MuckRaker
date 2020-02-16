import { MuckRakerContract } from "../../../contracts/types/MuckRakerContract"
import { MuckRakerContractFactory } from "../../../contracts/types/MuckRakerContractFactory"
import { config } from "../../keys"
import { QuoromProvider } from "../QuoromProvider"
import { QuoromMasterWallet } from "../QuoromWallet"


const contractGetOwner = async (productCID: string): Promise<string> => {
    const contract: MuckRakerContract = MuckRakerContractFactory.connect(config.quorum_contract_address, QuoromMasterWallet);
    const result = await contract.functions.get_owner(productCID)
    return result
}


export {
    contractGetOwner
}