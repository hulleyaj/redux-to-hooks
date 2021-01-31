import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  AppBar, Button, Box, Toolbar, Typography,
} from '@material-ui/core';

function Layout({ children, title }) {
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" flexGrow="1">
            <Typography variant="h6">{title}</Typography>
          </Box>
          <Box color="white">
            <Button onClick={() => history.push('/home')}>Home</Button>
            <Button onClick={() => history.push('/render')}>Render</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box maxWidth={1600} marginX="auto">
        {children}
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
