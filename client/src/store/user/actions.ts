import { Action, action } from "easy-peasy";
import { UserModel } from "./types";



export const logIn: Action<UserModel> = action((state, payload) => {
    console.log("Log in attempted")
})