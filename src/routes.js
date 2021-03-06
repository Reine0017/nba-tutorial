import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/footer";
import Header from "./components/header";

import Article from "./components/Articles";

import Teams from "./components/Teams";
import Movies from "./components/Movies";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/article/:id" component={Article}></Route>
      <Route path="/teams" component={Teams}></Route>
      <Route path="/movies" component={Movies}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Routes;
