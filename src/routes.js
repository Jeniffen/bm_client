import React from 'react';

import { Home } from './views/Home';
import { Wishlist } from './views/Wishlist';
import { Login } from './views/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home navbarItem="explore" />} />
          <Route
            path="/wishlist"
            render={() => <Wishlist navbarItem="wishlist" />}
          />
          <Route path="/login" render={() => <Login navbarItem="login" />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
