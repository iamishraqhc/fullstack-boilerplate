import "./App.css";
import React from "react";
// import Component1 from './components/Component1/Component1';
// import Component2 from './components/Component2/Component2';
// import FetchData from './components/FetchData/FetchData';
// import { Component1, Component2, FetchData, Header, Footer } from "./components";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/pricing">
            <Pricing />
          </Route>
          {/* path="*" sends you back to the home page if the url doesn't matches */}
          {/* <Route path="*">
            <Home />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
