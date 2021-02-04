import React from 'react';
import axios from 'axios';

function useGetUser() {
  const [loading, setLoading] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState('');
  const [user, setUser] = React.useState({});

  const getUser = React.useCallback((id) => {
    setLoading(true);
    setLoaded(false);
    setError('');
    setUser({});

    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
        setLoaded(true);
      })
      .catch(() => {
        setLoading(false);
        setError('Get user failed.');
      });
  }, []);

  return {
    loading,
    loaded,
    error,
    user,
    getUser,
  };
}
export default useGetUser;
