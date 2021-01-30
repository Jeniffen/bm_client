import React from "react";

import { Header } from "./views/Header";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

export const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
