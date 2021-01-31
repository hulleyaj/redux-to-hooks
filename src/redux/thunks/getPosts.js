import axios from 'axios';
import { getPostsRequest, getPostsOk, getPostsError } from '../actions/getPostsActions';

const getPosts = () => (dispatch) => {
  dispatch(getPostsRequest());

  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(({ data }) => dispatch(getPostsOk(data)))
    .catch(() => dispatch(getPostsError('Get posts failed.')));
};

// const getPosts = () => async (dispatch) => {
//   dispatch(getPostsRequest());

//   await setTimeout(() => axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(({ data }) => dispatch(getPostsOk(data)))
//     .catch(() => dispatch(getPostsError('Get posts failed.'))), 2000);
// };

export default getPosts;
