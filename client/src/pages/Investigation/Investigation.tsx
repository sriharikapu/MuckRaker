import React from "react";
import { TextField, makeStyles, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5)
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  field: {
    minWidth: theme.spacing(50),
    marginTop: theme.spacing(3)
  }
}));
const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" align={"center"} gutterBottom>
        Start An Investigation
      </Typography>
      <form className={classes.form}>
        <TextField
          className={classes.field}
          label="Investigation Name"
          variant="outlined"
        ></TextField>
        <TextField
          className={classes.field}
          label="Location"
          variant="outlined"
        ></TextField>
        <TextField
          className={classes.field}
          label="Category"
          variant="outlined"
        ></TextField>
        <TextField
          className={classes.field}
          label="Cover Photo"
          variant="outlined"
        ></TextField>
        <TextField
          className={classes.field}
          label="Investigation Budget"
          variant="outlined"
        ></TextField>
        <Button className={classes.field} variant="contained" color="primary">
          Start Investigation
        </Button>
      </form>
    </div>
  );
};

export default Projects;
