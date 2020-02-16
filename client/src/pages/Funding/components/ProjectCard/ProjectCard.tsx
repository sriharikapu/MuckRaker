import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { useStyles } from "./card.style";
import { ProjectModel } from "../../../../store/projects";

const ProjectCard: React.FC<ProjectModel> = props => {
  const classes = useStyles();
  const { name, budget, imageURL, category, location } = props;
  return (
    <Card className={classes.card}>
      <img src={"#"} className={classes.img} alt="User Profile" />
      <div className={classes.container}>
        <Typography>{name}</Typography>
        <div className={classes.rowContainer}>
          <Typography variant="caption">{category}</Typography>
          <span className={classes.dot}>&#183;</span>

          <Typography variant="caption">{location}</Typography>
        </div>
      </div>
      <div className={classes.container}>
        <Typography>$ {budget}</Typography>

        <Button variant="contained">FUND</Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
