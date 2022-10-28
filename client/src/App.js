import "./App.css";
import React from "react";
// import Component1 from './components/Component1/Component1';
// import Component2 from './components/Component2/Component2';
// import FetchData from './components/FetchData/FetchData';
// import { Component1, Component2, FetchData, Header, Footer } from "./components";
import { BrowserRouter, Redirect, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Features from "./pages/Features/Features";
// import Pricing from "./pages/Pricing/Pricing";
import { Home, Features, Pricing } from './pages'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />}/>
          <Route path="/pricing"element={<Pricing />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
