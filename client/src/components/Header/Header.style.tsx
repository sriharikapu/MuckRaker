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
    background:
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
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
