import { MuckRakerContract } from "../../../contracts/types/MuckRakerContract"
import { MuckRakerContractFactory } from "../../../contracts/types/MuckRakerContractFactory"
import { config } from "../../keys"
import { QuoromMasterWallet } from "../QuoromWallet"


const contractCreateProject = async (ownerAddress: string, productCID: string): Promise<boolean> => {
    const contract: MuckRakerContract = MuckRakerContractFactory.connect(config.quorum_contract_address, QuoromMasterWallet);

    try {
        const tx = await contract.functions.create_project(ownerAddress, productCID)
        return Promise.resolve(true)
    } catch (e) {
        console.log(e)
        return Promise.resolve(false)
    }
}

export { contractCreateProject }
