import { ProjectsModel } from "./types";
import { addProject, getProjects, setProjects, fundProject } from "./actions";

const projects: ProjectsModel = {
  projects: [],
  addProject,
  getProjects,
  setProjects,
  fundProject
};

export default projects;
export * from "./types";
