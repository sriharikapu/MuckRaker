import { UserModel } from "./types";
import { connectToMetamask, updateWeb3, updateAddress } from "./actions";
import { computed } from "easy-peasy";

const user: UserModel = {
  isLoggedIn: computed(state => state.address.length > 0),
  address: "",
  web3: {},
  connectToMetamask,
  updateWeb3,
  updateAddress
};

export default user;
export * from "./types";
