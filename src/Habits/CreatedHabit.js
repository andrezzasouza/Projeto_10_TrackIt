import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { DayHolder, DayButton } from "../LogInSignUp";

export default function CreatedHabit ({response}) {

  console.log(response);
  
  return (
    <CreatedHabitStyle>
      response.map();
      <p>{response.name}</p>
      <IconHolder>
        <IoTrashOutline color={"#666666"} />
      </IconHolder>
      <DayHolder>
        <DayButton>D</DayButton>
        <DayButton>S</DayButton>
        <DayButton>T</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>S</DayButton>
        <DayButton>S</DayButton>
      </DayHolder>
    </CreatedHabitStyle>
  );
}

const CreatedHabitStyle = styled.div`
  width: 340px;
  border-radius: 5px;
  padding: 13px 11px 15px 15px;
  background-color: #ffffff;
  margin: 0 0 10px;
  position: relative;

  p {
    text-align: left;
    color: #666666;
    font-size: 19.976px;
    line-height: 25px;
    margin: 0 0 8px;
  }
`;

const IconHolder = styled.div`
  position: absolute;
  top: 11px;
  right: 10px;
`;