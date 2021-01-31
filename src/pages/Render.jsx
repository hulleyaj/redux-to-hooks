/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Button, Paper, Typography,
} from '@material-ui/core';
import BasicInstructions from '../components/BasicInstructions';

function ComponentOne() {
  console.log('ComponentOne rendered');

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20, padding: 8 }}>
      <Typography variant="h6">Component One</Typography>
    </Paper>
  );
}

function ComponentTwo() {
  console.log('ComponentTwo rendered');

  const [count, setCount] = React.useState(0);

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20, padding: 8 }}>
      <Typography variant="h6">Component Two</Typography>
      <Typography variant="h4" component="span" color="secondary">{count}</Typography>
      <Box>
        <Button variant="outlined" color="primary" onClick={() => setCount(count + 1)}>Count + 1</Button>
      </Box>
    </Paper>
  );
}

function ComponentThree() {
  console.log('ComponentThree rendered');

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20, padding: 8 }}>
      <Typography variant="h6">Component Three</Typography>
    </Paper>
  );
}

function ComponentFour({ count, setCount }) {
  console.log('ComponentFour rendered');

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20, padding: 8 }}>
      <Typography variant="h6">Component Four</Typography>
      <Typography variant="h4" component="span" color="secondary">{count}</Typography>
      <Box>
        <Button variant="outlined" color="primary" onClick={() => setCount(count + 1)}>Count + 1</Button>
      </Box>
    </Paper>
  );
}

function LiftedState() {
  const [count, setCount] = React.useState(0);

  return (
    <Box display="flex" justifyContent="center" flexWrap="wrap">
      <ComponentThree />
      <ComponentFour count={count} setCount={setCount} />
    </Box>
  );
}

function Render() {
  return (
    <Box display="flex" flexDirection="column">
      <BasicInstructions />
      <Box my={2}>
        <Typography variant="subtitle1">As you increment count on Component Two, it will rerender itself without rerendering Component One</Typography>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <ComponentOne />
        <ComponentTwo />
      </Box>
      <Box my={2}>
        <Typography variant="subtitle1">For Component Three and Four below, Four's count state is lifted to a parent component that holds both Three and Four</Typography>
        <Typography variant="subtitle1">As you increment count on Component Four, Three and Four with both be rerendered because of the lifted state</Typography>
      </Box>
      <LiftedState />
    </Box>
  );
}

ComponentFour.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};

export default Render;
