import { ProjectsModel } from "./types";
import { addProject, getProjects, setProjects } from "./actions";

const projects: ProjectsModel = {
  projects: [],
  addProject,
  getProjects,
  setProjects
};

export default projects;
export * from "./types";
