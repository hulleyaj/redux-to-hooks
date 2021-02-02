import React from 'react';
import {
  Box,
  Button,
  Link,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import useDispatch from '../hooks/useDispatch';
import useEvent from '../hooks/useEvent';

const ON_SOME_EVENT_EMITTED = 'ON_SOME_EVENT_EMITTED';
const ON_SOME_EVENT_EMITTED_WITH_PROP = 'ON_SOME_EVENT_EMITTED_WITH_PROP';

function DispatcherComponent() {
  const dispatch = useDispatch();
  const [text, setText] = React.useState('');

  return (
    <Paper style={{ margin: 20, padding: 8 }}>
      <Typography variant="h6">Dispatching Component</Typography>
      <Box my={2}>
        <Button variant="outlined" color="primary" onClick={() => dispatch(ON_SOME_EVENT_EMITTED)}>Dispatch Event</Button>
      </Box>
      <Box display="flex" my={2}>
        <TextField
          label="Type In Anything"
          onChange={({ target: { value } }) => setText(value)}
          value={text}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => dispatch(ON_SOME_EVENT_EMITTED_WITH_PROP, text)}
          style={{ marginLeft: 16 }}
          disabled={!text}
        >
          Dispatch Event
        </Button>
      </Box>
    </Paper>
  );
}

function EventListenerComponent() {
  const [eventCount, setEventCount] = React.useState(0);
  const [eventProp, setEventProp] = React.useState('');

  const onSomeEventEmitted = React.useCallback(() => {
    setEventCount(eventCount + 1);
  }, [eventCount]);

  useEvent(ON_SOME_EVENT_EMITTED, onSomeEventEmitted);

  const onSomeEventWithPropEmitted = React.useCallback((prop) => {
    setEventProp(prop);
  }, []);

  useEvent(ON_SOME_EVENT_EMITTED_WITH_PROP, onSomeEventWithPropEmitted);

  return (
    <Paper style={{ margin: 20, padding: 8 }}>
      <Typography variant="h6">Event Listening Component</Typography>
      <Box my={2}>
        <Typography variant="subtitle">{`You've dispatched the event ${eventCount} times`}</Typography>
      </Box>
      <Box mt={5}>
        <Typography variant="subtitle">{`You've dispatched the event with ${eventProp}`}</Typography>
      </Box>
    </Paper>
  );
}

function Events() {
  return (
    <Box display="flex" flexDirection="column">
      <Box my={2}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Typography variant="h6" style={{ marginRight: 8 }}>This boss developed the event emitter so we could just copy and paste it in our code</Typography>
          <Link href="https://dominikdosoudil.medium.com/building-event-emitter-using-react-hooks-650f94a057ea">Here is the artcile</Link>
        </Box>
        <Typography variant="subtitle1">Sometimes you would rather not lift state or create a context for a very small piece of state</Typography>
        <Typography variant="subtitle1">You can dispatch events and have event listeners</Typography>
        <Typography variant="subtitle1">The components below pass two different events</Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <DispatcherComponent />
        <EventListenerComponent />
      </Box>
    </Box>
  );
}

export default Events;
