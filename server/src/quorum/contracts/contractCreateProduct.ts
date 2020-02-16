import { MuckRakerContract } from "../../../contracts/types/MuckRakerContract"
import { MuckRakerContractFactory } from "../../../contracts/types/MuckRakerContractFactory"
import { config } from "../../keys"
import { QuoromProvider } from "../QuoromProvider"
import { QuoromMasterWallet } from "../QuoromWallet"


const contractCreateProduct = async (ownerAddress: string, productCID: string): Promise<boolean> => {
    const contract: MuckRakerContract = MuckRakerContractFactory.connect(config.quorum_contract_address, QuoromMasterWallet);

    try {
        const tx = await contract.functions.create_product(ownerAddress, productCID)
        console.log(tx)
        return Promise.resolve(true)
    } catch (e) {
        return Promise.resolve(false)
    }
}

export {
    contractCreateProduct
}