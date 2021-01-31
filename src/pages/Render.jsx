import React from 'react';
import { Box, Paper, Typography } from '@material-ui/core';

function ComponentOne() {
  console.log('i rendered')

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20 }}>
      <Typography variant="h6">Component One</Typography>
    </Paper>
  );
}

function ComponentTwo() {
  const [count, setCount] = React.useState(0);

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20 }}>
      <Typography variant="h6">Component Two</Typography>
      <Typography variant="h4" component="span" color="secondary">{count}</Typography>
    </Paper>
  );
}

function Render() {
  return (
    <Box display="flex" justifyContent="center">
      <ComponentOne />
      <ComponentTwo />
    </Box>
  );
}

export default Render;
