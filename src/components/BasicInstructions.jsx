import React from 'react';
import { Box, Typography } from '@material-ui/core';

function BasicInstructions() {
  return (
    <Box my={4}>
      <Typography variant="subtitle1">Open your dev tools to watch for console logs</Typography>
      <Typography variant="subtitle1">Anytime one of the components renders, it will produce a log</Typography>
    </Box>
  );
}

export default BasicInstructions;
