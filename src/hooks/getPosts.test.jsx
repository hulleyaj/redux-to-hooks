import React from 'react';
import { render, act } from '@testing-library/react';
import axios from 'axios';
import useGetPosts from './getPosts';

jest.mock('axios');

describe('useGetPosts hook', () => {
  const state = {};

  beforeEach(() => {
    function TestComponent() {
      Object.assign(state, useGetPosts());

      return null;
    }

    render(<TestComponent />);

    return state;
  });

  it('should have initial state', () => {
    expect(state.loading).toEqual(false);
    expect(state.loaded).toEqual(false);
    expect(state.error).toEqual('');
    expect(state.getPosts).toEqual(expect.any(Function));
    expect(state.posts).toEqual([]);
  });

  it('should handle initial call', async () => {
    axios.get.mockImplementationOnce(() => new Promise(() => {}));

    await act(async () => {
      state.getPosts(0);
    });

    expect(state.loading).toEqual(true);
    expect(state.loaded).toEqual(false);
    expect(state.error).toEqual('');
    expect(state.posts).toEqual([]);
  });

  it('should handle successful call', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: ['my-posts'] }));

    await act(async () => {
      state.getPosts(0);
    });

    expect(state.loading).toEqual(false);
    expect(state.loaded).toEqual(true);
    expect(state.error).toEqual('');
    expect(state.posts).toEqual(['my-posts']);
  });

  it('should handle error call', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject());

    await act(async () => {
      state.getPosts(0);
    });

    expect(state.loading).toEqual(false);
    expect(state.loaded).toEqual(false);
    expect(state.error).toEqual('Get posts failed.');
    expect(state.posts).toEqual([]);
  });
});
