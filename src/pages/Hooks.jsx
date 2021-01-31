/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, LinearProgress, Paper, TextField, Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import BasicInstructions from '../components/BasicInstructions';
import PostsTable from '../components/PostsTable';
import useGetPosts from '../hooks/getPosts';

function CountingComponent({ instance }) {
  console.log(`CountingComponent ${instance} instance rendered`);

  const [count, setCount] = React.useState(0);

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20, padding: 8 }}>
      <Typography variant="h6">Counting Component</Typography>
      <Typography variant="h4" component="span" color="secondary">{count}</Typography>
      <Box>
        <Button variant="outlined" color="primary" onClick={() => setCount(count + 1)}>Count + 1</Button>
      </Box>
    </Paper>
  );
}

function GetPosts({ hasInput, instance }) {
  console.log(`GetPosts ${instance} instance rendered`);

  const {
    loading,
    error,
    posts,
    getPosts,
  } = useGetPosts();

  const [userId, setUserId] = React.useState('');

  return (
    <Paper style={{ minWidth: 300, width: 500, margin: 20, padding: 8 }}>
      { loading && <LinearProgress /> }
      { error && <MuiAlert severity="error">{error}</MuiAlert> }
      <Box>
        <Typography variant="h6">Get Posts</Typography>
        <PostsTable posts={posts} />
        <Box display="flex" justifyContent="flex-end" m={1}>
          {hasInput && (
            <TextField
              label="User Id"
              onChange={({ target: { value } }) => setUserId(value)}
              value={userId}
            />
          )}
          <Button variant="outlined" color="primary" onClick={() => getPosts(userId)} style={{ marginLeft: 16 }}>Get Posts</Button>
        </Box>
      </Box>
    </Paper>
  );
}

function Hooks() {
  return (
    <Box display="flex" flexDirection="column">
      <BasicInstructions />
      <Box my={2}>
        <Typography variant="subtitle1">Hooks maintain state at the component level they are 'hooked' in at</Typography>
        <Typography variant="subtitle1">Below are two instances of the same component, maintaining their own state</Typography>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <CountingComponent instance="first" />
        <CountingComponent instance="second" />
      </Box>
      <Box my={2}>
        <Typography variant="subtitle1">You can create 'custom hooks' that you can reuse across components, maintaining its own state</Typography>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <GetPosts instance="first" />
        <GetPosts instance="second" />
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <GetPosts instance="third" hasInput />
      </Box>
    </Box>
  );
}

CountingComponent.propTypes = {
  instance: PropTypes.string.isRequired,
};

GetPosts.defaultProps = {
  hasInput: false,
};

GetPosts.propTypes = {
  hasInput: PropTypes.bool,
  instance: PropTypes.string.isRequired,
};

export default Hooks;
