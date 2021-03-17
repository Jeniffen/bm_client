import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    status: 'pending',
    error: null,
    user: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'http://localhost:5000/api/auth/current_user',
        { withCredentials: true }
      );
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
