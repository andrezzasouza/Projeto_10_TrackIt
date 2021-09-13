import { useState, useContext, useEffect } from "react";
import { DayButtonStyle } from "../shared/LogInSignUp";

export default function DayButton ({ index, day, selectedDays, setSelectedDays }) {
  
  const [marked, setMarked] = useState(false);  

  function selectDay(e, index) {
    function repeated(number) {
      if (number === index) {
        return true;
      }
    }
    setMarked(!marked);
    const alreadySelected = selectedDays.find(repeated);
    if (alreadySelected !== undefined) {
      const removeSelection = selectedDays.filter((days) => days !== index);
      setSelectedDays(removeSelection);
    } else {
      setSelectedDays([...selectedDays, index]);
    }
  }

  return (
    <DayButtonStyle
      clicked={selectedDays.length === 0 && marked ? setMarked(false) : marked}
      index={index}
      onClick={(e) => selectDay(e, index)}
      type="button"
    >
      {day}
    </DayButtonStyle>
  );
}

