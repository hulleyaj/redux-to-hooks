import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Grid, LinearProgress, Paper, Typography,
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

export default User;
