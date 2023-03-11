import React from "react";
import { useState } from "react";
import styles from "./RegisterPage.module.css";
export default function RegisterPage() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [notSamePasswords, setNotSamePasswords] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.inputes}>
          <input placeholder="email"></input>
          <input
            placeholder="password"
            value={inputValue}
            onChange={handleChange}
          ></input>
          <input
            placeholder="repeat password"
            value={inputValue2}
            onChange={handleChange2}
          ></input>
        </div>
        <div className={styles.button}>
          <button
            onClick={() => {
              console.log(inputValue);
              console.log(inputValue2);
              setIsButtonClicked(true);
              {
                inputValue !== inputValue2
                  ? setNotSamePasswords(false)
                  : setNotSamePasswords(true);
              }
            }}
          >
            Register
          </button>
        </div>
        {notSamePasswords === false ? (
          <div style={{ color: "red", fontSize: "2.6rem" }}>
            Passwords are not the same
          </div>
        ) : (
          <div></div>
        )}
        {notSamePasswords === true &&
        inputValue.length < 3 &&
        isButtonClicked ? (
          <div style={{ color: "red", fontSize: "2.6rem" }}>
            Password is too short
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
