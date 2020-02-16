import axios from "axios";
import { Action, action, Thunk, thunk } from "easy-peasy";
import { ProjectModel, ProjectsModel } from "./types";
// http://5e485095d9636d0014a1e1a0.mockapi.io/Project

export const getProjects: Thunk<ProjectsModel> = thunk(
  async (actions, payload, helpers) => {
    const { setProjects } = actions;
    const res2 = await axios.get('/api/all_projects')

    setProjects(res2.data.response);
  }
);

export const setProjects: Action<ProjectsModel, Array<ProjectModel>> = action(
  (state, payload) => {
    state.projects = payload;
  }
);

export const addProject: Action<ProjectsModel, ProjectModel> = action(
  (state, payload) => {
    console.log("Attempted to add a project");
  }
);


export const fundProject: Thunk<ProjectsModel, any> = thunk((actions, payload) => {
  console.log('Attempted to fund project')
})
