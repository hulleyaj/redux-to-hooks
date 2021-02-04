/* eslint-disable no-console */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserProvider, useUser } from './UserContext';

describe('UserContext', () => {
  it('should not render if not in Provider', () => {
    expect.assertions(1);
    jest.spyOn(console, 'error');
    console.error.mockImplementation(() => {});

    function TestComponent() {
      useUser();

      return null;
    }

    expect(() => render(<TestComponent />)).toThrowError('useUser must be used within a UserProvider');

    console.error.mockRestore();
  });

  it('should render children', () => {
    render(<UserProvider><div data-testid="lol" /></UserProvider>);

    expect(screen.getByTestId('lol')).toBeTruthy();
  });

  it('should use passed in value from prop', () => {
    const TestComponent = () => {
      const { setTestId } = useUser();

      return <div data-testid={setTestId} />;
    };
    render(<UserProvider value={{ setTestId: 'my-id' }}><TestComponent /></UserProvider>);

    expect(screen.getByTestId('my-id')).toBeTruthy();
  });

  it('should use hook value', () => {
    const state = {};

    function TestComponent() {
      Object.assign(state, useUser());

      return null;
    }

    render(<UserProvider><TestComponent /></UserProvider>);

    expect(state.loading).toEqual(false);
    expect(state.loaded).toEqual(false);
    expect(state.error).toEqual('');
    expect(state.getUser).toEqual(expect.any(Function));
    expect(state.user).toEqual({});
  });
});
