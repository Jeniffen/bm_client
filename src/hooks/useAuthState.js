import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function useAuthState() {
  const state = useContext(AuthContext);
  return {
    ...state,
  };
}
