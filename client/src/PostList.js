import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
import { Grid, Card, useMediaQuery, useTheme } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "25em",
    height: "18em",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "25em",
      height: "17em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "12em",
      height: "17em",
    },
  },
  postTitle: {
    textAlign: "center",
    fontFamily: "Merienda One",
    fontSize: "1.5em",
    color: "#ec407a",
  },
}));

export default () => {
  const classes = useStyle();
  const theme = useTheme();
  const [posts, setPosts] = useState({});
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const fetchPosts = async () => {
    const res = await axios.get("http://posts-seher.com/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <Grid item>
        <Card
          className="card"
          style={{
            marginTop: matchesXS ? "1em" : "2em",
            marginLeft: matchesXS ? "0.1em" : "1em",
            marginRight: matchesXS ? "0.1em" : "1em",
            marginBottom: matchesXS ? "1em" : "5em"
          }}
        >
          <div style={{ marginBottom: "20px",  }} key={post.id}>
            <div className="card-body">
              <h3 className={classes.postTitle}>{post.title}</h3>
              <CommentList comments={post.comments} />
              <CommentCreate postId={post.id} />
            </div>
          </div>
        </Card>
      </Grid>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
