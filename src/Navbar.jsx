import React from "react";
import "./style.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <a href="/">ToDoPage</a>
        <li>
          {" "}
          <a href="/calender"> Calender</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/loginPage">Login/Register</a>
        </li>
        <li>
          <a href="/toDoListPage">working to doListPage</a>
        </li>
      </ul>
    </nav>
  );
}
