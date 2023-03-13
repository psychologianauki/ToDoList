import React from "react";
import "./style.css";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Logout from "./assets/icons/Logout";
import { useState } from "react";
export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar">
      <ul>
        <a href="/" style={{ color: "white" }}>
          Home
        </a>
        <li>
          {" "}
          <a href="/calender" style={{ color: "white" }}>
            {" "}
            Calender
          </a>
        </li>

        <li>
          <a href="/toDoListPage" style={{ color: "white" }}>
            To Do List
          </a>
        </li>
        {isLoggedIn === true ? (
          <div
            style={{
              color: "red",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Log out <Logout />
          </div>
        ) : (
          <li>
            <a
              href="/loginPage"
              style={{
                color: "white",
              }}
            >
              Login/Register
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}
