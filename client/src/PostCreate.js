import React, { useState } from 'react';
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleField: {
    marginTop: "0.1em",
  },
  title: {
    fontFamily: "Kalam",
    fontWeight: 700,
    fontSize: "2.5rem",
    color: "#ff66a3",
  },
  submit: {
    marginTop: "3em",
    color: "white",
    background: "linear-gradient(45deg, #f06292 20%, #9575cd 60%, #64b5f6 90%)",

  },
  titleLabel: {
    marginTop: "2em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
    },
  },
}));

export default () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post('http://posts-seher.com/posts/create', {
      title
    });

    setTitle('');
  };

  return (
    <Grid
      item
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Grid item className={classes.titleLabel}>
          <label>Title</label>
        </Grid>
        <Grid item className={classes.titleField}>
          <TextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            color="secondary"
            placeholder="Title of your post"
            style={{ fontFamily: "Handlee" }}

          />
        </Grid>
        <Grid item>
          <Button onClick={onSubmit} variant="contained" className={classes.submit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
