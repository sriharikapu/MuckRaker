import React from "react";
import { Button, Grid } from "@material-ui/core";
import { DonutLarge } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStoreActions, useStoreState } from "../../store";
import { useStyles } from "./Header.style";

const Header: React.FC = () => {
  const classes = useStyles();
  const { isLoggedIn, address } = useStoreState(state => state.user);
  const { connectToMetamask } = useStoreActions(state => state.user);

  const onClick = () => {
    try {
      connectToMetamask();
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
        {isLoggedIn === true ? (
          <p>{address}</p>
        ) : (
          <Button
            variant="outlined"
            color="inherit"
            className={classes.button}
            onClick={onClick}
          >
            Connect With Metamask
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Header;
