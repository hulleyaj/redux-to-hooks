import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Box, Button, Paper, Typography,
} from '@material-ui/core';
import { decreaseCount as decreaseCountAction, increaseCount as increaseCountAction } from '../redux/actions/countActions';
import { randomOne as randomOneAction, randomTwo as randomTwoAction, randomThree as randomThreeAction } from '../redux/actions/randomActions';
import { countSelector } from '../redux/reducers/count';

function CountComponent({
  count,
  decreaseCount,
  increaseCount,
}) {
  // console.log('CountComponent rendered');

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20, padding: 8 }}>
      <Typography variant="h6">Connected Count Component</Typography>
      <Box display="flex" justifyContent="center" mt={1}>
        <Button variant="outlined" color="primary" onClick={decreaseCount}>-</Button>
        <Box mx={2}>
          <Typography variant="h4" component="span" color="secondary">{count}</Typography>
        </Box>
        <Button variant="outlined" color="primary" onClick={increaseCount}>+</Button>
      </Box>
    </Paper>
  );
}

// eslint-disable-next-line no-unused-vars
const mapCountStateToProps = (state) => {
  const { count } = countSelector(state);

  return {
    count,
  };
};

const mapCountDispatchToProps = {
  decreaseCount: decreaseCountAction,
  increaseCount: increaseCountAction,
};

CountComponent.propTypes = {
  count: PropTypes.number.isRequired,
  decreaseCount: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired,
};

const ConnectedCountComponent = connect(
  mapCountStateToProps,
  mapCountDispatchToProps,
)(CountComponent);

function RandomComponent({
  randomOne,
  randomTwo,
  randomThree,
}) {
  // console.log('RandomComponent rendered');

  return (
    <Paper style={{ minWidth: 300, maxWidth: 500, margin: 20, padding: 8 }}>
      <Typography variant="h6">Connected Random Component</Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box width={250} my={1}>
          <Button variant="outlined" color="primary" onClick={randomOne} fullWidth>Random Action One</Button>
        </Box>
        <Box width={250} my={1}>
          <Button variant="outlined" color="secondary" onClick={randomTwo} fullWidth>Random Action Two</Button>
        </Box>
        <Box width={250} my={1}>
          <Button variant="outlined" style={{ color: '#39b449', border: '1px solid #39b449' }} onClick={randomThree} fullWidth>Random Action Three</Button>
        </Box>
      </Box>
    </Paper>
  );
}

// eslint-disable-next-line no-unused-vars
const mapRandomStateToProps = (state) => ({});

const mapRandomDispatchToProps = {
  randomOne: randomOneAction,
  randomTwo: randomTwoAction,
  randomThree: randomThreeAction,
};

RandomComponent.propTypes = {
  randomOne: PropTypes.func.isRequired,
  randomTwo: PropTypes.func.isRequired,
  randomThree: PropTypes.func.isRequired,
};

const ConnectedRandomComponent = connect(
  mapRandomStateToProps,
  mapRandomDispatchToProps,
)(RandomComponent);

function ReduxSwitch() {
  return (
    <Box display="flex" flexDirection="column">
      <Box my={2}>
        <Typography variant="subtitle1">Open your dev tools to watch for console logs</Typography>
        <Typography variant="subtitle1">Even though these redux components are connected at their own level -without an overarching parent- their states are still managed by redux</Typography>
        <Typography variant="subtitle1">When you fire an action in redux, it runs through every reducer to see if a switch statement matches the action type</Typography>
        <Typography variant="subtitle1">Increment the count and you will see a console log for the action hitting the random reducer</Typography>
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <ConnectedCountComponent />
        <ConnectedRandomComponent />
      </Box>
    </Box>
  );
}

export default ReduxSwitch;
