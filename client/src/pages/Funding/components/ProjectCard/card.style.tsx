import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(3),
    margin: theme.spacing(0, 3),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      margin: "0"
    }
  },
  img: {
    height: theme.spacing(20),
    backgroundColor: "darkgrey",
    width: "100%"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(2)
  },
  status: {
    fontWeight: "bold",
    textAlign: "left"
  },
  pending: {
    color: theme.palette.warning.dark
  },
  denied: {
    color: theme.palette.error.dark
  },
  approved: {
    color: theme.palette.secondary.dark
  }
}));
