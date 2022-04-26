import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import Post from "./Post/Post";

export default function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log(posts);
  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
    // <div>
    //   <h1>POSTS</h1>
    //   {posts.map((post) => {
    //     return <Post key={post._id} post={post} />;
    //   })}
    // </div>
  );
}
