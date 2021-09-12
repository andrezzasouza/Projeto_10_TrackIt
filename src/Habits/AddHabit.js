import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../UserContext";
import axios from "axios";

import { InputStyle, DayHolder, DayButton } from "../LogInSignUp";

export default function AddHabit ({show, setShow}) {

  const { userData } = useContext(UserContext);

  const [task, setTask] = useState("");
  const [enabled, setEnabled] = useState(true);

  const days = ["D", "S", "T", "Q", "Q", "S", "S"]

  function selectDay () {
    
  }

  function addError() {
    alert("Algo deu errado. Tente novamente.")
    setEnabled(true);
  }

  function addedHabit(response) {
    // criar hábito na página prinicipal
    // desmarcar botões
    setEnabled(true);
    setTask("");
    hideBox();
  }

  function createNewHabit (e) {
    setEnabled(false);
    e.preventDefault();
    // chamar axios, criar novo item abaixo, esconder caixa com display none(?)

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const body = {
      name: {task},
      days: [1, 3, 5], // segunda, quarta e sexta
    };
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      body,
      config
    );

    promise.then(addedHabit);
    promise.catch(addError);
  }

  function hideBox () {
    setShow(false)
  }

  return (
    <AddHabitStyle visible={show}>
      <form onSubmit={createNewHabit}>
        <InputStyle
          clickable={enabled}
          placeholder="nome do hábito"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <DayHolder>
          {days.map((day, index) => (
            <DayButton 
              index={index} 
              onClick={selectDay}
              type="button"
            >
              {day}
            </DayButton>
          ))}
        </DayHolder>
        <ButtonHolder clickable={enabled}>
          <button type="button" onClick={hideBox}>
            Cancelar
          </button>
          <button type="submit">Salvar</button>
        </ButtonHolder>
      </form>
    </AddHabitStyle>
  );

}

const AddHabitStyle = styled.div`
  width: 340px;
  height: 180px;
  border-radius: 5px;
  padding: 18px 18px 15px 19px;
  margin: 0 0 29px;
  background-color: #ffffff;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: ${(props) => (props.clickable ? 1 : 0.7)};
  pointer-events: ${(props) => (props.clickable ? "auto" : "none")};

  button {
    width: 84px;
    height: 35px;
    margin: 29px 0 0 4px;
    border-radius: 4.63636px;
    border: none;
    font-family: "Lexend Deca", sans-serif;
  }

  & :first-child {
    background-color: #ffffff;
    color: #52b6ff;
  }

  & :last-child {
    background: #52b6ff;
    color: #ffffff;
  }
`;