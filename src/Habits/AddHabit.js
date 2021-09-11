import styled from "styled-components";
import { useState } from "react";

import { InputStyle, DayHolder, DayButton } from "../LogInSignUp";

export default function AddHabit () {

  const [task, setTask] = useState("");
  function createNewHabit (e) {
    e.preventDefault();
    // chamar axios, criar novo item abaixo, esconder caixa com display none(?)
  }

  return (
    <CreateHabit>
      <form onSubmit={createNewHabit}>
        <InputStyle 
          placeholder="nome do hábito" 
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <DayHolder>
          <DayButton>D</DayButton>
          <DayButton>S</DayButton>
          <DayButton>T</DayButton>
          <DayButton>Q</DayButton>
          <DayButton>Q</DayButton>
          <DayButton>S</DayButton>
          <DayButton>S</DayButton>
        </DayHolder>
        <ButtonHolder>
          <button>Cancelar</button>
          <button type="submit">Salvar</button>
        </ButtonHolder>
      </form>
    </CreateHabit>
  );

}

const CreateHabit = styled.div`
  width: 340px;
  height: 180px;
  border-radius: 5px;
  padding: 18px 18px 15px 19px;
  margin: 0 0 29px;
  background-color: #ffffff;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 84px;
    height: 35px;
    margin: 29px 0 0 4px;
    border-radius: 4.63636px;
    border: none;
    opacity: 1;
    font-family: "Lexend Deca", sans-serif;

    /* onclick
    opacity: 0.7; ? */
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