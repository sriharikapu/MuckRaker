import React, { useEffect, useState } from "react";
import { Grid, TextField, InputAdornment, makeStyles } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import FuzzySearch from "fuzzy-search";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import FundedProjects from "./components/FundedProjects/FundedProjects";
import { useStoreState, useStoreActions } from "../../store";

const useStyles = makeStyles({
  root: {
    paddingLeft: "5vw",
    paddingRight: "5vw",
    marginTop: "10vh"
  }
});
const Funding: React.FC = () => {
  const [searchFilter, setFilter] = useState("");
  const { getProjects } = useStoreActions(state => state.projects);
  const { projects } = useStoreState(state => state.projects);
  const searcher = new FuzzySearch(projects, ["name", "category", "location"]);
  const filteredProjects = searcher.search(searchFilter);
  const classes = useStyles();
  useEffect(() => {
    getProjects();
  }, [getProjects]);
  return (
    <div className={classes.root}>
      <TextField
        placeholder="Search Projects"
        variant="outlined"
        value={searchFilter}
        onChange={event => setFilter(event.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          )
        }}
      ></TextField>
      <FundedProjects projects={projects.slice(0, 4)}></FundedProjects>
      <h1>All Projects</h1>
      <Grid container spacing={4}>
        {filteredProjects.map((project, index) => {
          return (
            <Grid item xs={12} md={6} key={`${project.name}-${index}`}>
              <ProjectCard {...project}></ProjectCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Funding;
