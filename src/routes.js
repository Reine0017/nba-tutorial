import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/footer";
import Header from "./components/header";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home}></Route>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
