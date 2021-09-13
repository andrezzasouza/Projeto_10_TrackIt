import { DayButtonStyle } from "../LogInSignUp";
import { useState } from "react";

export default function HabitDay({ day, currentTaskDays, index }) {

  console.log("ctd", currentTaskDays);
  console.log("i", index);

  const [dayTask, setDayTask] = useState(false);

  function selection () {
    currentTaskDays.find((daySelection) => daySelection === index ? setDayTask(true) : setDayTask(false));
  }

  return (
    <DayButtonStyle
      clicked={dayTask}
      type="button"
    >
      {day}
    </DayButtonStyle>
  );
}
