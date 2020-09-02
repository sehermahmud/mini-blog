import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Link,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "60em",
    height: "150em",
    marginBottom: "3em",
    marginTop: "5em",
    [theme.breakpoints.down("sm")]: {
      width: "47em",
      height: "170em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "20em",
      height: "195em",
    },
  },
  title: {
    fontFamily: "Merienda One",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "#ff66a3",
  },
  guideButton: {
    color: "#64b5f6",
  },
  verticalLine: {
    display: "inlineBlock",
    borderLeft: "1px solid #ccc",
    margin: "0 10px",
    height: "125px",
  },
  backHomeButton: {
    color: "#64b5f6",
  },
  guideTitle: {
    fontFamily: "Merienda One",
    fontWeight: 700,
    fontSize: "10rem",
    color: "#ff66a3",
    [theme.breakpoints.down("sm")]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
  body1: {
    fontSize: "3em",
    color: "#9575cd",
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
    },
  },
  body2: {
    fontSize: "2em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
    },
  },
  warning1: {
    fontSize: "2.5em",
    color: "red",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6em",
    },
  },
  warning2: {
    fontSize: "2em",
    color: "lightgreen",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
    },
  },
}));

export default () => {
  const classes = useStyle();

  return (
    <Grid
      item
      container
      direction="row"
      alignItems="center"
      style={{ marginTop: "2em" }}
    >
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item>
          <Typography className={classes.guideTitle}>Guides</Typography>
        </Grid>
        <Grid item>
          <Button color="primary" variant="outlined" component={Link} href="/">
            <Typography className={classes.backHomeButton}>
              Back to Home
            </Typography>
          </Button>
        </Grid>
        <Card elevation={3} className={classes.root} align="center">
          <CardContent>
            <Grid item>
              <Typography align="center" className={classes.body1}>
                1. Posting
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="justify" className={classes.body2}>
                In the first page, write the name of the title and make sure
                that your spellings and name is correct bacause there is no way
                to delete cause there is no Authentication for your post to be
                delete! please be careful. if you are done with the title then
                click the submit button bellow it.
              </Typography>
              <br />
              <Typography align="justify" className={classes.warning1}>
                If you don't see your post!!
              </Typography>
              <br />
              <Typography align="justify" className={classes.warning2}>
                So, read the line's below
              </Typography>
              <br />
              <Typography align="justify" className={classes.warning2}>
                Option 1. Refresh the page!
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                Option 2. It can be for a slow network connection!
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                Option 3. Your browser don't Support this website. For that I
                will suggest to use the following brower Below:
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                1. Google Chrome,
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                2. Firefox,
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                3. Microsoft Edge,
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                4. Opera,
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                5. Safari
              </Typography>
              <br />
              <Typography align="justify" className={classes.body2}>
                and we are out of options, sorry can't help and we feel bad for
                you{" "}
                <span role="img" aria-label="label">
                  😢
                </span>
              </Typography>
            </Grid>
            <br />
            <Grid item>
              <Typography align="center" className={classes.body1}>
                1. Comment
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="justify" className={classes.body2}>
                In the first page, write your comment of the post and make sure
                that your spellings and name is correct bacause there is no way
                to delete cause there is no Authentication for your post to be
                delete! please be careful. if you are done with the comment then
                click the submit button bellow it and then you can see that you
                comment is in all of the post in this website. Don't worry about
                that! it is the system we build it. I know you too confused but
                I wanted to try something different, so made this posting
                website like this. so please don't worry about that!
              </Typography>
              <br />
              <Typography align="justify" className={classes.warning1}>
                If you don't see your comment!!
              </Typography>
              <br />
              <Typography align="justify" className={classes.warning2}>
                So, read the line's below
              </Typography>
              <br />
              <Typography align="justify" className={classes.warning2}>
                Option 1. Refresh the page!
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                Option 2. It can be for a slow network connection!
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                Option 3. Your browser don't Support this website. For that I
                will suggest to use the following brower Below:
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                1. Google Chrome,
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                2. Firefox,
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                3. Microsoft Edge,
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                4. Opera,
              </Typography>
              <Typography align="justify" className={classes.warning2}>
                5. Safari
              </Typography>
              <br />
              <Typography align="justify" className={classes.body2}>
                and we are out of options, sorry can't help and we feel bad for
                you{" "}
                <span role="img" aria-label="label">
                  😢
                </span>
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
