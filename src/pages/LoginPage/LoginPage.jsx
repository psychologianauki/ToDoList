import React from "react";
import styles from "./LoginPage.module.css";
export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.inputes}>
          <input placeholder="email"></input>
          <input placeholder="password"></input>
        </div>
        <div className={styles.button}>
          <button>Login</button>
        </div>
        <h4>
          If you dont have account yet, you can register{" "}
          <a href="/registerPage" style={{ color: "black" }}>
            here
          </a>
        </h4>
      </div>
    </div>
  );
}
