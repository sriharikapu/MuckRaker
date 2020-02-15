import { Action, action } from "easy-peasy";
import { UserModel } from "./types";

// declare global {
//     interface Window { ethereum: any; web3: any }
// }

export const logIn: Action<UserModel> = action((state, payload) => {
    console.log("Log in attempted")
    try {
        window.ethereum.enable();

    } catch(e) {
        console.log('Error occured while attempting to login')
    }
})