import { GET_POSTS_REQUEST, GET_POSTS_OK, GET_POSTS_ERROR } from '../constants/actionTypes';

export const postsSelector = (state) => state.posts;

const initialState = {
  loading: false,
  loaded: false,
  error: '',
  posts: [],
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return { ...initialState, loading: true };
    case GET_POSTS_OK:
      return { ...initialState, loaded: true, posts: action.payload };
    case GET_POSTS_ERROR:
      return { ...initialState, error: action.error };
    default:
      return state;
  }
};

export default posts;
