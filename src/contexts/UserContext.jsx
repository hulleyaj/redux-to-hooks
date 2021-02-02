import React from 'react';
import PropTypes from 'prop-types';
import useGetUser from '../hooks/getUser';

const UserContext = React.createContext();

export const UserProvider = ({ children, value }) => {
  const {
    loading,
    loaded,
    error,
    user,
    getUser,
  } = useGetUser();

  return (
    <UserContext.Provider
      value={value || {
        loading,
        loaded,
        error,
        user,
        getUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

UserProvider.defaultProps = {
  value: undefined,
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.shape({
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
    }),
    setUser: PropTypes.func,
  }),
};
