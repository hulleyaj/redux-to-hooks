import { useEffect, useContext } from 'react';
import { EventContext } from '../contexts/EventContext';

const useEvent = (event, callback) => {
  // eslint-disable-next-line no-unused-vars
  const [subscribe, unsubscribe, _dispatch] = useContext(EventContext);

  useEffect(() => {
    subscribe(event, callback);

    return () => unsubscribe(event, callback);
  }, [subscribe, unsubscribe, event, callback]);
};

export default useEvent;
