import { GET_POSTS_REQUEST, GET_POSTS_OK, GET_POSTS_ERROR } from '../constants/actionTypes';

export const getPostsRequest = () => ({
  type: GET_POSTS_REQUEST,
});

export const getPostsOk = (payload) => ({
  type: GET_POSTS_OK,
  payload,
});

export const getPostsError = (error) => ({
  type: GET_POSTS_ERROR,
  error,
});
