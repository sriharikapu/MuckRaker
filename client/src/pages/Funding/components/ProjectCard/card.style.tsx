import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles(theme => ({
  card: {
    padding: theme.spacing(3),
    margin: theme.spacing(0, 3),
    minHeight: theme.spacing(30),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    [theme.breakpoints.down("xs")]: {
      margin: "0"
    }
  },
  img: {
    backgroundColor: "darkgrey",
    maxWidth: theme.spacing(30)
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    flexDirection: "column"
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row"
  },
  status: {
    fontWeight: "bold",
    textAlign: "left"
  },
  dot: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));
