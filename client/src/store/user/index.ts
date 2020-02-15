import { UserModel } from "./types";
import { logIn , updateUser} from "./actions";

const user: UserModel = {
    isLoggedIn: false,
    address: "",
    web3: {},
    logIn,
    updateUser
}

export default user;
export * from './types'