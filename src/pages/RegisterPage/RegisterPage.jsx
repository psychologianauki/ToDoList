import React from "react";
import { useState } from "react";
import styles from "./RegisterPage.module.css";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../config";
import db from "../../../config";
import { doc, setDoc, updateDoc } from "@firebase/firestore";
export default function RegisterPage() {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [email, setEmail] = useState("");
  const [notSamePasswords, setNotSamePasswords] = useState(true);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [dataEmail, setDataEmail] = useState("");
  const password = inputValue;
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const registerUser = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(userCredential);
        setDataEmail(userCredential.user.email);
        setDoc(doc(db, "users", user.email), {
          email: userCredential.user.email,
        });
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.inputes}>
          <input
            placeholder="email"
            value={email}
            onChange={handleEmail}
          ></input>
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
              registerUser();
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
