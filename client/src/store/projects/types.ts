import { Action, Thunk } from "easy-peasy";

export interface ProjectModel {
  name: string;
  createdAt: number;
  category: string;
  budget: number;
  location: string;
  imageURL: string,
  address: string
}

export interface ProjectsModel {
  projects: Array<ProjectModel>;
  addProject: Action<ProjectsModel, ProjectModel>;
  getProjects: Thunk<ProjectsModel>;
  setProjects: Action<ProjectsModel, Array<ProjectModel>>;
  fundProject: Thunk<ProjectsModel, any>
}
