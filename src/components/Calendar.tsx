import React, { ChangeEvent, useState } from "react";
import { Weekday, Date } from "../../types";
import { Weekdays } from "../configs/Weekdays";
import { monthDates } from "../configs/MonthDays";

export const Calendar: React.FC<{}> = ({}) => {
  const [selectDate, setSelectDate] = useState<string | null>();

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectDate(e.currentTarget.getAttribute("value"));
  };

  const generateDates = (date: number) => {
    for (let i = 0; i < 7; i++) {
      return (
        <button
          className="date"
          onClick={handleChange}
          value={`date ${date == 18 ? "today" : ""}`}
        >
          <p>{date}</p>
        </button>
      );
    }
  };

  const generateWeeks = (dates: Array<Date>) => {
    let daysInWeek = 7;
    let tempArray = [];

    for (let i = 0; i < dates.length; i += daysInWeek) {
      tempArray.push(dates.slice(i, i + daysInWeek));
    }
    return tempArray;
  };

  return (
    <div className="calendar-container">
      <div className="datepicker-container"></div>
      <span> February 2021</span>
      <div className="weekdays-container">
        {Weekdays.map((day) => (
          <div className="week-day">{day}</div>
        ))}
      </div>
      <div className="calendar"></div>
      {generateWeeks(monthDates).map((week) => (
        <div className="week">{week.map((day) => generateDates(day.day))}</div>
      ))}
    </div>
  );
};
