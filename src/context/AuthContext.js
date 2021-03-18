import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    authStatus: 'pending',
    error: null,
    user: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      // Loading Status
      try {
        const result = await axios.get(
          'http://localhost:5000/api/auth/current_user',
          { withCredentials: true }
        );
        setAuthState({ authStatus: 'success', error: null, user: result.data });
      } catch (error) {
        setAuthState({ authStatus: 'error', error, user: null });
      } finally {
        // Loading Status
      }
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
