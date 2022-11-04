import React, { useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./Sample.less";

import { addDays, differenceInCalendarDays } from "date-fns";

export default function Sample() {
  const [value, setValue] = useState(new Date());

  const tomorrow = addDays(new Date(), 1);
  const in3Days = addDays(new Date(), 3);
  const in5Days = addDays(new Date(), 5);
  function isSameDay(a, b) {
    return differenceInCalendarDays(a, b) === 0;
  }

  function onChange(value) {
    setValue(value);
    console.log("New date is: ", value);
  }

  const datesToAddContentTo = [tomorrow, in3Days, in5Days];
  function tileClassName({ date, view }) {
    // Add class to tiles in month view only
    if (view === "month") {
      // Check if a date React-Calendar wants to check is on the list of dates to add class to
      if (datesToAddContentTo.find((dDate) => isSameDay(dDate, date))) {
        return "xxx";
      }
    }
  }

  return (
    <div className="Sample">
      <header>
        <h1>react-calendar sample page</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar
            onChange={onChange}
            showWeekNumbers
            showDoubleView
            selectRange
            returnValue="range"
            allowPartialRange={true}
            value={value}
            tileClassName={tileClassName}
          />
        </main>
      </div>
    </div>
  );
}
