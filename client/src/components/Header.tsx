import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useStoreActions, useStoreState } from "../store";

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-around"
  }
});
const Header: React.FC = () => {
  const classes = useStyles();
  //   const { address, isLoggedIn } = useStoreState(state => state.user);
  const logIn = useStoreActions(state => state.user.logIn);

  const onLogInClick = () => {
    try {
      logIn();
    } catch (e) {
      console.log(`Error occured: ${e}`);
    }
  };
  return (
    <div className={classes.header}>
      <p>Muck Raker</p>
      <a>Menu Item A</a>
      <a>Menu Item B</a>
      <a>Menu Item C</a>
      <Button onClick={onLogInClick} variant="contained" color="primary">
        Log In
      </Button>
    </div>
  );
};

export default Header;
