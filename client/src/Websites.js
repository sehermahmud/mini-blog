import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, Button, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PostCreate from "./PostCreate";
import PostList from "./PostList";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "36em",
    height: "33em",
    marginBottom: "3em",
    [theme.breakpoints.down("sm")]: {
      width: "36em",
      height: "33em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "22em",
      height: "38em",
    },
  },
  title: {
    fontFamily: "Merienda One",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "#ff66a3",
  },
  verticalLine: {
    display: "inlineBlock",
    borderLeft: "1px solid #ccc",
    margin: "0 10px",
    height: "125px",
  },
  guideButton: {
    color: "#64b5f6",
  },
}));

export default () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        style={{ marginTop: "2em" }}
      >
        <Grid container direction="column" alignItems="center" justify="center">
          <Card elevation={3} className={classes.root} align="center">
            <CardContent>
              <Grid
                item
                container
                direction="column"
                justify="center"
                style={{ color: "pink" }}
                alignItems="center"
                lg
              >
                <Grid item>
                  <Typography className={classes.title}>Create Post</Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    An online mini post of name's of Books, stuffs, animals,
                    etc.
                  </Typography>
                  <br />
                  <Typography>
                    No Authentication, No Money and Nothing too much
                    interactive. It's all free and simple. Please read the
                    guides for you to know how the system works in this website.
                    If you are thinking it's just a small post of sharing names
                    and writing comments, yeah you're write but there is a
                    difference and warnings that you should know before posting
                    any post
                  </Typography>
                </Grid>
                <br />
                <Button
                  color="primary"
                  variant="outlined"
                  component={Link}
                  href="/guide"
                >
                  <Typography className={classes.guideButton}>
                    Guides
                  </Typography>
                </Button>
                <PostCreate />
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <hr />
      <Grid item container direction="row" alignItems="center">
        <Grid container direction="column">
          <Typography
            align="center"
            className={classes.title}
            style={{ color: "#9575cd" }}
          >
            Posts
          </Typography>
        </Grid>
        <PostList />
      </Grid>
    </React.Fragment>
  );
};
