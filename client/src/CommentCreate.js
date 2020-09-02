import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
      marginTop: "1.5em",
      color: "white",
      background: "linear-gradient(45deg, #f06292 20%, #9575cd 60%, #64b5f6 90%)",
  
    },
    titleLabel: {
      marginTop: "1em",
    },
}));


export default ({ postId }) => {
  const classes = useStyles();
  const [content, setContent] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    });

    setContent('');
  };

  return (
    <Grid
      item
      container
      direction="column"
    >
      <Grid item>
        <Grid item className={classes.titleLabel}>
          <label>New Comment</label>
        </Grid>
        <Grid item className={classes.titleField}>
          <TextField
            value={content}
            onChange={e => setContent(e.target.value)}
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
