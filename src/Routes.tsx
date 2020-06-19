import React from "react";
import { Route, Router, Switch } from "react-router-dom";

import { history } from "./configs/history";

import { Home } from "./pages/Home";
import { Main } from "pages/_layouts/Main";

export const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Home} />
          </Switch>
        </Main>
      </Switch>
    </Router>
  );
};
