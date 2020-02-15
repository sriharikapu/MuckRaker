import { Thunk, thunk, action, Action } from "easy-peasy";
import { UserModel } from "./types";

export const logIn: Thunk<UserModel> = thunk(async (actions, payload) => {
  console.log("Log in attempted");

});

export const updateUser: Action<UserModel, Array<string>> = action(
  (state, payload) => {
    const accounts: Array<string> = payload;
    state.address = accounts[0];
    state.isLoggedIn = true;
  }
);
