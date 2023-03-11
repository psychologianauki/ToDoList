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
      component = (
        <ToDoListPage text="To do list to fulfill without saving data, login is not necessarly needed to use this page" />
      );

      break;
    case "/loginPage":
      component = <LoginPage />;
      break;
    case "/registerPage":
      component = <RegisterPage />;
      break;
    default:
      component = (
        <ToDoListPage text="To do list to fulfill, with saving data, you will be able to go back to it in any moment" />
      );
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
