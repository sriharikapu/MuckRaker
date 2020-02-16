import { Thunk, Action, Computed } from "easy-peasy";
import Web3 from "web3";

export interface UserModel {
  address: string;
  isLoggedIn: Computed<UserModel, boolean>;
  web3: Web3;
  connectToMetamask: Thunk<UserModel>;
  updateWeb3: Action<UserModel, Web3>;
  updateAddress: Action<UserModel, string>;
}
