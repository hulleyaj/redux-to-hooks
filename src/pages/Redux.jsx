import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import BasicInstructions from '../components/BasicInstructions';
import PostsTable from '../components/PostsTable';
import { postsSelector } from '../redux/reducers/posts';
import getPostsThunk from '../redux/thunks/getPosts';

function GetPosts({
  loading,
  error,
  posts,
  getPosts,
}) {
  console.log('GetPosts rendered');

  return (
    <Paper style={{ minWidth: 300, width: 500, margin: 20, padding: 8 }}>
      { loading && <LinearProgress /> }
      { error && <MuiAlert severity="error">{error}</MuiAlert> }
      <Box>
        <Typography variant="h6">Get Posts</Typography>
        <PostsTable posts={posts} />
        <Box display="flex" justifyContent="flex-end" m={1}>
          <Button variant="outlined" color="primary" onClick={getPosts}>Get Posts</Button>
        </Box>
      </Box>
    </Paper>
  );
}

function RandomComponent() {
  console.log('RandomComponent rendered');

  return (
    <Paper style={{ minWidth: 300, width: 500, height: 200, margin: 20, padding: 8 }}>
      <Typography variant="h6">Random Component</Typography>
    </Paper>
  );
}

function Redux(props) {
  return (
    <Box display="flex" flexDirection="column">
      <BasicInstructions />
      <Box my={2}>
        <Typography variant="subtitle1">As you fetch posts, it will cause rerenders on Random Component because of the lifted state</Typography>
        <Typography variant="subtitle1">If you think you can just connect the Get Posts component to remedy that, you are correct</Typography>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <GetPosts {...props} />
        <RandomComponent />
      </Box>
    </Box>
  );
}

GetPosts.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const {
    loading,
    loaded,
    error,
    posts,
  } = postsSelector(state);

  return {
    loading,
    loaded,
    error,
    posts,
  };
};

const mapDispatchToProps = {
  getPosts: getPostsThunk,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Redux);
