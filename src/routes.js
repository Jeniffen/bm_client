import React from 'react';
import { Home } from './views/Home';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
      </Switch>
    </>
  );
};
