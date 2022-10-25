
import React from "react";
import { Header, Component1, Component2, FetchData, Footer } from "../components"
// import Features from "./Features"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="App">
        <div className="data-list">
          <Component1 />
          <Component2 prop1="Component" prop2="2" />
          <FetchData query="himym" />
        </div>


      </div>
      <Footer />
    </div>

  );
};

export default Home;
