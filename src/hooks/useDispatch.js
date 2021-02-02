import { useContext } from 'react';
import { EventContext } from '../contexts/EventContext';

const useDispatch = () => {
  // eslint-disable-next-line no-unused-vars
  const [_subscribe, _unsubscribe, dispatch] = useContext(EventContext);

  return dispatch;
};

export default useDispatch;
