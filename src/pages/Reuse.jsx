import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, Grid, LinearProgress, Paper, Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import useGetUser from '../hooks/getUser';

function User({ id }) {
  const {
    loading,
    loaded,
    error,
    user,
    getUser,
  } = useGetUser();

  React.useEffect(() => {
    getUser(id);
  }, [getUser, id]);

  return (
    <Paper style={{ margin: 20, padding: 8, width: 400 }}>
      <Typography variant="h6">{`User ${id}`}</Typography>
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

User.defaultProps = {
  id: 1,
};

User.propTypes = {
  id: PropTypes.number,
};

function Reuse() {
  const [controlledUserId, setControlledUserId] = React.useState(undefined);

  return (
    <Box display="flex" flexDirection="column">
      <Box my={2}>
        <Typography variant="subtitle1">The component below handles its own state, and fetches data for user id 1 on mount</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <User />
      </Box>
      <Box my={2}>
        <Typography variant="subtitle1">Because of the useEffect hook with a dependency on the id, if the id changes, it will call the useEffect function again</Typography>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box marginX="auto">
          <Grid container spacing={3}>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={() => setControlledUserId(1)}>User 1</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={() => setControlledUserId(2)}>User 2</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={() => setControlledUserId(3)}>User 3</Button>
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" justifyContent="center">
          <User id={controlledUserId} />
        </Box>
      </Box>
    </Box>
  );
}

export default Reuse;
