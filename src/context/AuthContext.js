import { useState, useEffect, createContext } from 'react';
import authService from '../api/authService';
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authStatus: 'pending',
    error: null,
    user: null,
  });

  useEffect(() => {
    authService.getCurrentUser(setAuthState);
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
