import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./pages/About";
import Calender from "./pages/Calender";
import HomePage from "./pages/HomePage";
function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/calender":
      component = <Calender />;
      break;
  }

  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
