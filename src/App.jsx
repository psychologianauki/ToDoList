import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Link, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./pages/AboutPage/About";
import Calender from "./pages/CalenderPage/Calender";
import HomePage from "./pages/HomePage/HomePage";
import ToDoListPage from "./pages/ToDoListPage/ToDoListPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
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
    case "/toDoListPage":
      component = <ToDoListPage />;
      break;
    case "/loginPage":
      component = <LoginPage />;
      break;
    case "/registerPage":
      component = <RegisterPage />;
  }

  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
