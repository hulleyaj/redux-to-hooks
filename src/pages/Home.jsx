import React from 'react';
import { Box, Typography } from '@material-ui/core';

function Home() {
  return (
    <Box display="flex" flexDirection="column" my={2}>
      <Typography variant="subtitle1">This website is meant to be ran with the console open, and while looking at the code and description of each page</Typography>
      <Typography variant="subtitle1">The nav links in the header match the files in ./src/pages/...</Typography>
    </Box>
  );
}

export default Home;
