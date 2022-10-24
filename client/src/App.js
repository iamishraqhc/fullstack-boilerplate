import "./App.css";
// import Component1 from './components/Component1/Component1';
// import Component2 from './components/Component2/Component2';
// import FetchData from './components/FetchData/FetchData';
import { Component1, Component2, FetchData, Header } from "./components";
const App = () => {
  return (
    <div>
      <Header />
      <div className="App">
        <Component1 />
        <Component2 prop1="Component" prop2="2" />
        <FetchData />
      </div>
    </div>
  );
};

export default App;
