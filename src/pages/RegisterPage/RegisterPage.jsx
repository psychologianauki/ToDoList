import React from "react";
import styles from "./RegisterPage.module.css";
export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.inputes}>
          <input placeholder="email"></input>
          <input placeholder="password"></input>
          <input placeholder="repeat password"></input>
        </div>
        <div className={styles.button}>
          <button>Register</button>
        </div>
      </div>
    </div>
  );
}
