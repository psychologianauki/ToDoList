import React from "react";
import styles from "./ToDoListPage.module.css";
import { useState } from "react";
import Done from "../../assets/icons/done";
import Reject from "../../assets/icons/Reject";

export default function ToDoListPage() {
  const [myArray, setMyArray] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("gray");
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setMyArray([...myArray, inputValue]);
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>
          To do list to fulfill{" "}
          {
            "(without saving data, login is not necessarly needed to use this page)"
          }
        </h1>
        <div className={styles.inputbutton}>
          <input
            className={styles.input}
            placeholder="Add to ToDo List"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          ></input>
          <button className={styles.button} onClick={handleButtonClick}>
            Add
          </button>
        </div>
        <div>
          {myArray.map((value, index) => (
            <div
              key={index}
              className={styles.ToDoListElem}
              style={{
                backgroundColor: "black",
                display: "flex",
                fontSize: "2.5rem",
                gap: "20px",
                borderRadius: "10px",
                marginTop: "15px",
                textAlign: "left",
                paddingLeft: "30px",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {index + 1}
              {".  "}
              {value}
              <div className={styles.icons}>
                <div
                  onClick={() => {
                    if (selectedIndexes.includes(index)) {
                      setSelectedIndexes(
                        selectedIndexes.filter((i) => i !== index)
                      );
                    } else {
                      setSelectedIndexes([...selectedIndexes, index]);
                    }
                  }}
                >
                  <Done
                    fill={selectedIndexes.includes(index) ? "green" : "gray"}
                    stroke={selectedIndexes.includes(index) ? "green" : "gray"}
                  />{" "}
                </div>
                <div
                  onClick={() => {
                    const newArray = [...myArray];
                    newArray.splice(index, 1);
                    setMyArray(newArray);
                  }}
                >
                  <Reject />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
