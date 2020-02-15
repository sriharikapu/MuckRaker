import React from "react";
import { Card, Typography, Button } from "@material-ui/core";
import { useStyles } from "./card.style";

interface PCProps {
  name: string;
}
const ProjectCard: React.FC<PCProps> = props => {
  const classes = useStyles();
  const { name } = props;
  return (
    <Card className={classes.card}>
      <img src="#" className={classes.img} alt="User Profile" />
      <div className={classes.container}>
        <Typography>{name}</Typography>
        <Typography>$ {name}</Typography>
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
