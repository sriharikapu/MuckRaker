import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ProjectModel } from "../../../../store/projects";

interface FPProps {
  projects: Array<ProjectModel>;
}
const OFFSET: number = 2;
const FundedProjects: React.FC<FPProps> = props => {
  const { projects } = props;
  const [page, setPage] = useState(1);
  const filteredProjects = projects.slice(page - 1, page - 1 + OFFSET);
  const handleChange = (_, value: string) => {
    setPage(parseInt(value));
  };
  return (
    <>
      <h1>Projects Currently Funding</h1>
      <Grid container spacing={4}>
        {filteredProjects.map((project, index) => {
          return (
            <Grid item xs={12} md={6} key={`${project.name}-${index}`}>
              <ProjectCard {...project}></ProjectCard>
            </Grid>
          );
        })}
      </Grid>
      <Pagination
        count={projects.length / 2}
        variant="outlined"
        onChange={handleChange}
        page={page}
      ></Pagination>
    </>
  );
};

export default FundedProjects;
