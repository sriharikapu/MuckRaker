import React from "react";
import { Button, Grid } from "@material-ui/core";
import { DonutLarge } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStoreActions } from "../../store";
import { useStyles } from "./Header.style";

const Header: React.FC = () => {
  const classes = useStyles();
  const { logIn } = useStoreActions(state => state.user);

  const onClick = () => {
    try {
      logIn();
    } catch (e) {
      console.log(`An error ocurred in Header: ${e}`);
    }
  };
  return (
    <Grid container className={classes.header}>
      <Grid item md={6} className={classes.logoSection}>
        <DonutLarge />
        <Link to="/" className={classes.link}>
          Muck Raker
        </Link>
      </Grid>
      <Grid item md={6} className={classes.menuSection}>
        <Link to="/funding" className={classes.link}>
          Discover Projects
        </Link>
        <Link to="/investigate" className={classes.link}>
          Start Your Investigation
        </Link>
        <Button color="inherit" className={classes.button} onClick={onClick}>
          Log In
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          className={classes.button}
          onClick={onClick}
        >
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
