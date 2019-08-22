import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Country from "./pages/Country";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/countries/" exact component={Countries} />
      <Route path="/countries/:code" exact component={Country} />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default Router;
