import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles, useTheme } from "@material-ui/core/styles";

import PostCreate from "./PostCreate";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "18.5em",
    height: "20em",
    [theme.breakpoints.down("sm")]: {
			width: "18.5em",
      height: "15em",
    },
  },
  title: {
    fontFamily: "Merienda One",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "#ff66a3",
  },
}));

export default () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item style={{marginTop: "2em", marginLeft: matchesSM ? 0 : "2em"}}>
    <Paper elevation={3} className={classes.root} style={{marginLeft: matchesSM ? "3em" : 0}}>
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ marginLeft: "2em", color: "pink" }}
        lg
      >
        <Grid item>
          <Typography className={classes.title} color="secondary">
            Create Post
          </Typography>
        </Grid>
          <PostCreate />
      </Grid>
    </Paper>
    </Grid>
  );
};
