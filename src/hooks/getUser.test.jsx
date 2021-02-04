import React from 'react';
import { render, act } from '@testing-library/react';
import axios from 'axios';
import useGetUser from './getUser';

jest.mock('axios');

describe('useGetUser hook', () => {
  const state = {};

  beforeEach(() => {
    function TestComponent() {
      Object.assign(state, useGetUser());

      return null;
    }

    render(<TestComponent />);

    return state;
  });

  it('should have initial state', () => {
    expect(state.loading).toEqual(false);
    expect(state.loaded).toEqual(false);
    expect(state.error).toEqual('');
    expect(state.getUser).toEqual(expect.any(Function));
    expect(state.user).toEqual({});
  });

  it('should handle initial call', async () => {
    axios.get.mockImplementationOnce(() => new Promise(() => {}));

    await act(async () => {
      state.getUser(0);
    });

    expect(state.loading).toEqual(true);
    expect(state.loaded).toEqual(false);
    expect(state.error).toEqual('');
    expect(state.user).toEqual({});
  });

  it('should handle successful call', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { my: 'user' } }));

    await act(async () => {
      state.getUser(0);
    });

    expect(state.loading).toEqual(false);
    expect(state.loaded).toEqual(true);
    expect(state.error).toEqual('');
    expect(state.user).toEqual({ my: 'user' });
  });

  it('should handle error call', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject());

    await act(async () => {
      state.getUser(0);
    });

    expect(state.loading).toEqual(false);
    expect(state.loaded).toEqual(false);
    expect(state.error).toEqual('Get user failed.');
    expect(state.user).toEqual({});
  });
});
