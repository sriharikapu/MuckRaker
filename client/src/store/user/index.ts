import { UserModel } from "./types";
import { connectToMetamask, updateWeb3, updateAddress } from "./actions";
import { computed } from "easy-peasy";
import Web3 from "web3";

const user: UserModel = {
  isLoggedIn: computed(state => state.address.length > 0),
  address: "",
  web3: new Web3(Web3.givenProvider || "ws://localhost:8546"),
  connectToMetamask,
  updateWeb3,
  updateAddress
};

export default user;
export * from "./types";
