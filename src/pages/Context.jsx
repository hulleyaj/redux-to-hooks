import React from 'react';
import {
  Box,
  Button,
  Grid,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useUser } from '../contexts/UserContext';

function SetUser() {
  const [userId, setUserId] = React.useState('');
  const { getUser } = useUser();

  return (
    <Box display="flex" alignItems="center" mx="auto">
      <TextField
        label="User Id"
        onChange={({ target: { value } }) => setUserId(value)}
        value={userId}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => getUser(userId)}
        style={{ marginLeft: 16 }}
        disabled={!userId}
      >
        GET USER
      </Button>
    </Box>
  );
}

function UserUsingContext() {
  const {
    loading,
    loaded,
    error,
    user,
  } = useUser();

  return (
    <Paper style={{ margin: 20, padding: 8, width: 400 }}>
      <Typography variant="h6">{`User ${user.id}`}</Typography>
      { loading && <LinearProgress /> }
      { error && <MuiAlert severity="error">{error}</MuiAlert> }
      { loaded && (
        <Grid container spacing={6}>
          <Grid item xs={5}>
            <Box display="flex" flexDirection="column" alignItems="flex-end" marginLeft={2}>
              <Typography variant="subtitle1" color="primary">Name</Typography>
              <Typography variant="subtitle1" color="primary">Email</Typography>
              <Typography variant="subtitle1" color="primary">Phone</Typography>
            </Box>
          </Grid>
          <Grid item xs={7}>
            <Box display="flex" flexDirection="column" alignItems="flex-start" marginRight={2}>
              <Typography variant="subtitle1">{user.name}</Typography>
              <Typography variant="subtitle1">{user.email}</Typography>
              <Typography variant="subtitle1">{user.phone}</Typography>
            </Box>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
}

function Context() {
  return (
    <Box display="flex" flexDirection="column">
      <Box my={2}>
        <Typography variant="subtitle1">Contexts can be used for global state</Typography>
        <Typography variant="subtitle1">Imagine that you want to don't want to fetch the user on each mount of a component</Typography>
        <Typography variant="subtitle1">Imagine that you have other components that would like to use the same user</Typography>
      </Box>
      <Box display="flex" justifyContent="center" flexDirection="column" mx="auto">
        <SetUser />
        <UserUsingContext />
      </Box>
      <Box my={2}>
        <Typography variant="subtitle1">Now navigate away from this page and come back</Typography>
        <Typography variant="subtitle1">Notice how you didn't fetch your user again because it was stored in global state using a context</Typography>
      </Box>
    </Box>
  );
}

export default Context;
