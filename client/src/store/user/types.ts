import { Action } from "easy-peasy";

export interface UserModel {
    address: string,
    isLoggedIn: boolean,
    web3: Object,
    logIn: Action<UserModel>
}