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
      </ul>
    </nav>
  );
}
