import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import { AuthContextProvider } from './context/AuthContext';
import { ModalContextProvider } from './context/ModalContext';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './routes';

ReactDOM.render(
  <Router>
    <GlobalStyle />
    <AuthContextProvider>
      <ModalContextProvider>
        <Routes />
      </ModalContextProvider>
    </AuthContextProvider>
  </Router>,
  document.getElementById('root')
);
