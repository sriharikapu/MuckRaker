import React, { useEffect } from "react";
import { Grid, TextField, InputAdornment, makeStyles } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import { useStoreState, useStoreActions } from "../../store";

const useStyles = makeStyles({
  root: {
    paddingLeft: "5vw",
    paddingRight: "5vw"
  }
});
const Funding: React.FC = () => {
  const { projects } = useStoreState(state => state.projects);
  const { getProjects } = useStoreActions(state => state.projects);
  const classes = useStyles();
  useEffect(() => {
    getProjects();
  }, [getProjects]);
  return (
    <div className={classes.root}>
      <TextField
        placeholder="Search Projects"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          )
        }}
      ></TextField>
      <h1>Projects Currently Funding</h1>
      <Grid container spacing={4}>
        {projects.splice(0, 4).map((project, index) => {
          return (
            <Grid item xs={12} md={6} lg={3} key={`${project.name}-${index}`}>
              <ProjectCard {...project}></ProjectCard>
            </Grid>
          );
        })}
      </Grid>
      <h1>All Projects</h1>
      <Grid container spacing={4}>
        {projects.map((project, index) => {
          return (
            <Grid item xs={12} md={6} lg={3} key={`${project.name}-${index}`}>
              <ProjectCard {...project}></ProjectCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Funding;
