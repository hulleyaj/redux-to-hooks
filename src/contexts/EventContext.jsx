/* eslint-disable no-unused-vars */
import React, {
  useCallback, useMemo, useReducer, createContext,
} from 'react';

export const EventContext = createContext([
  (_event, _cb) => {},
  (_event, _cb) => {},
  (_event, _payload) => {},
]);

// eslint-disable-next-line react/prop-types
export const EventEmitter = ({ children }) => {
  const [subscribers, dispatch] = useReducer((state, action) => {
    const { type, event } = action;
    switch (type) {
      case 'subscribe': {
        const { callback } = action;
        if (event in state) {
          if (state[event].includes(callback)) {
            return state;
          }
          return { ...state, [event]: [...state[event], callback] };
        }
        return { ...state, [event]: [callback] };
      }

      case 'unsubscribe': {
        const { callback } = action;
        if (event in state && state[event].includes(callback)) {
          return { ...state, [event]: [...state[event].filter((cb) => cb !== callback)] };
        }
        return state;
      }

      default:
        throw new Error();
    }
  }, {}, () => ({}));

  const subscribersRef = React.useRef({});

  subscribersRef.current = React.useMemo(() => subscribers, [subscribers]);

  const subscribe = useCallback(
    (event, callback) => {
      dispatch({ type: 'subscribe', event, callback });
    },
    [dispatch],
  );

  const unsubscribe = useCallback(
    (event, callback) => {
      dispatch({ type: 'unsubscribe', event, callback });
    },
    [dispatch],
  );

  const dispatchEvent = useCallback((event, payload) => {
    if (event in subscribersRef?.current) {
      // eslint-disable-next-line no-unused-expressions
      subscribersRef?.current[event].forEach((cb) => cb(payload));
    }
  }, [subscribersRef]);

  const eventPack = useMemo(
    () => ([subscribe, unsubscribe, dispatchEvent]),
    [subscribe, unsubscribe, dispatchEvent],
  );

  return (
    <EventContext.Provider value={eventPack}>
      {children}
    </EventContext.Provider>
  );
};
