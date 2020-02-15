import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { useStyles } from "./card.style";
import { ProjectModel } from "../../../../store/projects";

const ProjectCard: React.FC<ProjectModel> = props => {
  const classes = useStyles();
  const { name, budget, imageURL } = props;
  return (
    <Card className={classes.card}>
      <img src={imageURL} className={classes.img} alt="User Profile" />
      <div className={classes.container}>
        <Typography>{name}</Typography>
        <Typography>$ {budget}</Typography>
      </div>
      <Typography variant="caption">Caption</Typography>
      <div className={classes.container}>
        <Typography>{name.toUpperCase()}</Typography>
        <Button variant="contained">FUND</Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
