import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { useStoreState, useStoreActions } from "../../store";
const Funding: React.FC = () => {
  const { projects } = useStoreState(state => state.projects);
  const { getProjects } = useStoreActions(state => state.projects);
  useEffect(() => {
    getProjects();
  }, [getProjects]);
  return (
    <div>
      <h1>Funding Page</h1>
      <Grid container spacing={4}>
        {projects.map((project, index) => {
          return (
            <Grid item xs={12} md={6} lg={3} key={`${project.name}-${index}`}>
              <ProjectCard name={project.name}></ProjectCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Funding;
