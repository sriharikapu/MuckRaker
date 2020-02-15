import user, { UserModel } from "./user";
import { createStore, createTypedHooks } from "easy-peasy";
import projects, { ProjectsModel } from "./projects";
const typedHooks = createTypedHooks<StoreModel>();

export interface StoreModel {
    user: UserModel,
    projects: ProjectsModel
}

const model: StoreModel = {
    user,
    projects
}

export default createStore(model);
export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;