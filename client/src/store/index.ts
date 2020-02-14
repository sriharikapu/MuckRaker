import user, { UserModel } from "./user";
import { createStore, createTypedHooks } from "easy-peasy";
const typedHooks = createTypedHooks<StoreModel>();

export interface StoreModel {
    user: UserModel
}

const model: StoreModel = {
    user
}

export default createStore(model);
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;