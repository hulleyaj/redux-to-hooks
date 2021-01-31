import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import PostsTable from './PostsTable';
import { postsSelector } from '../redux/reducers/posts';
import getPostsThunk from '../redux/thunks/getPosts';

function ConnectedGetPosts({
  loading,
  error,
  posts,
  getPosts,
}) {
  //console.log('ConnectedGetPosts rendered');

  const [userId, setUserId] = React.useState('');

  return (
    <Paper style={{ minWidth: 300, width: 500, margin: 20, padding: 8 }}>
      { loading && <LinearProgress /> }
      { error && <MuiAlert severity="error">{error}</MuiAlert> }
      <Box>
        <Typography variant="h6">Connected Get Posts</Typography>
        <PostsTable posts={posts} />
        <Box display="flex" justifyContent="flex-end" m={1}>
          <TextField
            label="User Id"
            onChange={({ target: { value } }) => setUserId(value)}
            value={userId}
          />
          <Button variant="outlined" color="primary" onClick={() => getPosts(userId)} style={{ marginLeft: 16 }}>Get Posts</Button>
        </Box>
      </Box>
    </Paper>
  );
}

ConnectedGetPosts.propTypes = {
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
)(ConnectedGetPosts);
