import React from "react";
import { Grid, TextField, Typography, InputAdornment } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    paddingLeft: "5vw"
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  title: {
    fontFamily: "Slabo"
  }
});
export default function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={5} className={classes.container}>
        <Typography
          variant="h1"
          component="h2"
          gutterBottom
          className={classes.title}
        >
          Shine Light A On The Truth
        </Typography>
        <TextField
          placeholder="Search Projects"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            )
          }}
        />
      </Grid>
      <Grid item xs={12} md={7} className={classes.container}>
        <img
          src="/images/press_freedom_fists.png"
          style={{
            borderRadius: 10,
            WebkitMaskImage:
              "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))"
          }}
        />
      </Grid>
    </Grid>
  );
}
