import React from 'react';
import {
  Box, Button, Grid, Typography,
} from '@material-ui/core';
import User from '../components/User';

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
              <Button variant="contained" color="secondary" onClick={() => setControlledUserId(1)}>User 1</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={() => setControlledUserId(2)}>User 2</Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={() => setControlledUserId(3)}>User 3</Button>
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
