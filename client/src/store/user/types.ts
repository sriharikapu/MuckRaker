import { Thunk, Action } from "easy-peasy";

export interface UserModel {
    address: string,
    isLoggedIn: boolean,
    web3: Object,
    logIn: Thunk<UserModel>
    updateUser: Action<UserModel, Array<string>>
}