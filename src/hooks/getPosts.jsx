import React from 'react';
import axios from 'axios';

function useGetPosts() {
  const [loading, setLoading] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState('');
  const [posts, setPosts] = React.useState([]);

  const getPosts = React.useCallback((userId) => {
    setLoading(true);
    setLoaded(false);
    setError('');
    setPosts([]);

    let params = '';
    if (userId) params += `userId=${userId}&`;

    axios.get(`https://jsonplaceholder.typicode.com/posts?${params}`)
      .then(({ data }) => {
        setLoading(false);
        setPosts(data);
        setLoaded(true);
      })
      .catch(() => {
        setLoading(false);
        setError('Get posts failed.');
      });
  }, []);

  return {
    loading,
    loaded,
    error,
    posts,
    getPosts,
  };
}
export default useGetPosts;
