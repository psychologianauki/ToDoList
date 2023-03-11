import React from "react";
import styles from "./Calender.module.css";
import Calendar from "react-calendar";
import { useState } from "react";

export default function calendar() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  console.log(month);
  console.log(year);

  const SmallDivs = () => {
    const smallDivs = [];

    let numberOfDays;

    if (
      month === 0 ||
      month === 2 ||
      month === 4 ||
      month === 6 ||
      month === 7 ||
      month === 9 ||
      month === 11
    ) {
      numberOfDays = 31;
    }
    if (month === 1) {
      numberOfDays = 28;
    }
    if (month === 1 && year / 4 === 0) {
      numberOfDays = 29;
    }
    if (month === 3 || month === 5 || month === 8 || month === 10) {
      numberOfDays = 30;
    }

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    let month2 = month;
    const emptyDivs = [];
    for (let i = 0; i < firstDayOfMonth - 1; i++) {
      emptyDivs.push(
        <div
          key={`empty-${i}`}
          style={{
            width: "13%",
            height: "80px",
            backgroundColor: "black",
            margin: "2px",
          }}
        >
          <div></div>
        </div>
      );
    }

    for (let i = 0; i < numberOfDays; i++) {
      const dayOfMonth = i + 1;
      const date = new Date(year, month, dayOfMonth);
      const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });

      smallDivs.push(
        <div
          key={`day-${i}`}
          style={{
            width: "13%",
            height: "80px",
            backgroundColor: "black",
            margin: "2px",
          }}
          onClick={() => {
            window.location.href = `/calender/${dayOfMonth}`;
          }}
        >
          <div>{dayOfMonth}</div>
          <div>{dayOfWeek}</div>
        </div>
      );
    }

    return (
      <div className={styles.smalldives}>
        {emptyDivs}
        {smallDivs}
      </div>
    );
  };

  return (
    <div className="app">
      Calendar component
      <SmallDivs />
    </div>
  );
}
