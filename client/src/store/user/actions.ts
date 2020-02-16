import { Action, action, thunk, Thunk } from "easy-peasy";
import { UserModel } from "./types";
import Web3 from "web3";

export const connectToMetamask: Thunk<UserModel> = thunk(
  async (actions, payload) => {
    console.log("Log in attempted");
    try {
      const accounts = await window.ethereum.enable();
      const web3 = new Web3(window.ethereum);

      actions.updateAddress(accounts[0]);
      actions.updateWeb3(web3);
    } catch (e) {
      console.log("Error occured while attempting to login");
    }
  }
);

export const updateWeb3: Action<UserModel, Web3> = action((state, payload) => {
  console.log("Attempted to update web3");
  state.web3 = payload;
});

export const updateAddress: Action<UserModel, string> = action(
  (state, payload) => {
    console.log("Attempted to update ethereum address");
    state.address = payload;
  }
);
