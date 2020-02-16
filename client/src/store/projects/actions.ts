import { Thunk, thunk, Action, action } from "easy-peasy";
import axios from "axios";
import { ProjectsModel, ProjectModel } from "./types";
// http://5e485095d9636d0014a1e1a0.mockapi.io/Project

export const getProjects: Thunk<ProjectsModel> = thunk(
  async (actions, payload) => {
    const { setProjects } = actions;
    const res = await axios.get(
      "http://5e485095d9636d0014a1e1a0.mockapi.io/Project"
    );
    console.log("Projects: ", res);

    setProjects(res.data);
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
