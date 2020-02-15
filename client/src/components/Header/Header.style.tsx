import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Raleway",
    fontWeight: 800,
    backgroundColor: "black",
    color: "white",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10vh"
  },
  menuSection: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  logoSection: {
    display: "flex",
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    color: "white"
  },

  button: {
    transition: "0.5s",
    minWidth: "100px",
    "&:hover": {
      background: "linear-gradient(to right, #ff9966, #ff5e62)",
      color: "white"
    }
  }
}));
