import { Action, Thunk } from "easy-peasy";

export interface ProjectModel {
  name: string;
  createdAt: Date;
  id: string;
  category: string;
  budget: number;
  report: string;
  Location: string;
  imageURL: string
}

export interface ProjectsModel {
  projects: Array<ProjectModel>;
  addProject: Action<ProjectsModel, ProjectModel>;
  getProjects: Thunk<ProjectsModel>;
  setProjects: Action<ProjectsModel, Array<ProjectModel>>;
}
