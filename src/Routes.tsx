import React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";

import { history } from "./configs/history";

import { Home } from "./pages/Home";
import { Main } from "pages/_layouts/Main";
import { SignIn } from "pages/SignIn";

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Main>
          <Switch>
            <Route exact path="/dashboard" component={Home} />
            <Route path="*" component={() => <Redirect to="/" />} />
          </Switch>
        </Main>
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};
