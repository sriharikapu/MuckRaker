import { ethers, Wallet } from "ethers";
import { config } from "../keys";
import { QuoromProvider } from "./QuoromProvider";

const wallet: Wallet = ethers.Wallet.fromMnemonic(config.quorom_mnuemonic).connect(QuoromProvider)

export {
    wallet as QuoromMasterWallet
}