import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5";
import { DayHolder, DayButtonStyle } from "../LogInSignUp";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../UserContext";

export default function CreatedHabit ({ currentTask, habitCallToServer }) {

  const { userData } = useContext(UserContext);

  console.log("ct", currentTask);
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
  
  function deleteTask (e) {
    const deleteHabit = window.confirm("Você realmente quer deletar esse hábito?");
    if (deleteHabit) {
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${currentTask.id}`,
        config
      );
      promise.then(() => habitCallToServer());
      promise.catch(() => "Algo deu errado. Tente novamente.")
    }
  }

  return (
    <CreatedHabitStyle>
      <p>{currentTask.name}</p>
      <IconHolder onClick={deleteTask}>
        <IoTrashOutline color={"#666666"} />
      </IconHolder>
      <DayHolder>
        {days.map((day, index) => (
          <DayButtonStyle
            clicked={
              {
                /*marked*/
              }
            }
            key={index}
            index={index}
            type="button"
          >
            {day}
          </DayButtonStyle>
        ))}
      </DayHolder>
    </CreatedHabitStyle>
  );
}

const CreatedHabitStyle = styled.div`
  width: 340px;
  border-radius: 5px;
  padding: 13px 27px 15px 15px;
  background-color: #ffffff;
  margin: 0 0 10px;
  position: relative;

  p {
    text-align: left;
    color: #666666;
    font-size: 19.976px;
    line-height: 25px;
    margin: 0 0 8px;
    word-break: break-all;
  }
`;

const IconHolder = styled.div`
  position: absolute;
  top: 11px;
  right: 10px;
`;