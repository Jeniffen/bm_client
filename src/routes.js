import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './views/Home';
import { Login } from './views/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
