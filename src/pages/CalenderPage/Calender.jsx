import React from "react";
import styles from "./Calender.module.css";
import Calendar from "react-calendar";

import { useState } from "react";
export default function calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <h1 className="text-center">React Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className="text-center">
        <span className="bold">Selected Date:</span> {date.toDateString()}
      </p>
    </div>
  );
}
