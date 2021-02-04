import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Paper,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core';

function Component({ label }) {
  const [count, setCount] = React.useState(0);

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20, padding: 8 }}>
      <Typography variant="h6">{label}</Typography>
      <Typography variant="h4" component="span" color="secondary">{count}</Typography>
      <Box>
        <Button variant="outlined" color="primary" onClick={() => setCount(count + 1)}>Count + 1</Button>
      </Box>
    </Paper>
  );
}

function Hidden() {
  const [tabBad, setTabBad] = React.useState(0);
  const [tabGood, setTabGood] = React.useState(0);

  return (
    <Box display="flex" flexDirection="column">
      <Box my={2}>
        <Typography variant="subtitle1">Short circuiting components will cause them to unmount and lose state</Typography>
        <Typography variant="subtitle1">Increment the count on each component, and swap back and forth between tabs</Typography>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Tabs
          value={tabBad}
          onChange={(_, val) => setTabBad(val)}
          indicatorColor="primary"
        >
          <Tab label="Tab One" />
          <Tab label="Tab Two" />
        </Tabs>
        <Box my={2}>
          { tabBad === 0 && <Component label="Tab One Component" />}
          { tabBad === 1 && <Component label="Tab Two Component" />}
        </Box>
      </Box>
      <Box my={2}>
        <Typography variant="subtitle1">The tabs are losing their state because they get unmounted when short circuited</Typography>
        <Typography variant="subtitle1">Use CSS display hidden to fix this</Typography>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Tabs
          value={tabGood}
          onChange={(_, val) => setTabGood(val)}
          indicatorColor="primary"
        >
          <Tab label="Tab One" />
          <Tab label="Tab Two" />
        </Tabs>
        <Box my={2}>
          <Box hidden={tabGood !== 0}>
            <Component label="Tab One Component" />
          </Box>
          <Box hidden={tabGood !== 1}>
            <Component label="Tab Two Component" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

Component.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Hidden;
