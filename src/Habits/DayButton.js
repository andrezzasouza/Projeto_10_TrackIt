// import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import { DayButtonStyle } from "../LogInSignUp";
import SelectionContext from "../SelectionContext";

export default function DayButton ({ index, day, selectedDays, setSelectedDays, setClear }) {
  
  const [marked, setMarked] = useState(false);  

  function selectDay(e, index) {
    function repeated(number) {
      if (number === index) {
        return true;
      }
    }

    console.log("clicked", e);
    console.log("index", index);
    setMarked(!marked);
    const alreadySelected = selectedDays.find(repeated);
    console.log("aS", alreadySelected);
    if (alreadySelected !== undefined) {
      const removeSelection = selectedDays.filter((days) => days !== index);
      console.log("rS", removeSelection);
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

