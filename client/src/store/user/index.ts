import { UserModel } from "./types";
import { logIn } from "./actions";

const user: UserModel = {
    isLoggedIn: false,
    address: "",
    web3: {},
    logIn
}

export default user;
export * from './types'