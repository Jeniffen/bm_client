import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import userService from '../api/userService';
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authStatus: 'pending',
    error: null,
    user: null,
  });

  useEffect(() => {
    userService.getCurrentUser(setAuthState);
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
