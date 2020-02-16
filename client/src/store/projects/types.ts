import { Action, Thunk } from "easy-peasy";

export interface ProjectModel {
  name: string;
  createdAt: number;
  id: string;
  category: string;
  budget: number;
  report: string;
  location: string;
  imageURL: string
}

export interface ProjectsModel {
  projects: Array<ProjectModel>;
  addProject: Action<ProjectsModel, ProjectModel>;
  getProjects: Thunk<ProjectsModel>;
  setProjects: Action<ProjectsModel, Array<ProjectModel>>;
}
