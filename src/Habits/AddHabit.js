import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../UserContext";
import axios from "axios";
import DayButton from './DayButton'
// import { useHistory } from "react-router-dom";

import { InputStyle, DayHolder } from "../LogInSignUp";

export default function AddHabit ({ show, setShow, habitCallToServer }) {

  const { userData } = useContext(UserContext);
  // const history = useHistory();

  const [selectedDays, setSelectedDays] = useState([]);
  const [task, setTask] = useState("");
  const [enabled, setEnabled] = useState(true);

  const days = ["D", "S", "T", "Q", "Q", "S", "S"]

  

  // function selectDay (e, index) {

  //   function repeated(number) {
  //     if (number === index) {
  //       return true;
  //     }
  //   }

  //   console.log("clicked", e);
  //   console.log("index", index);
  //   setMarked(!marked);
  //   const alreadySelected = selectedDays.find(repeated);
  //   console.log("aS", alreadySelected);
  //   if (alreadySelected !== undefined) {
  //     const removeSelection = selectedDays.filter((days) => days !== index);
  //     console.log("rS", removeSelection);
  //     setSelectedDays(removeSelection);
  //   } else {
  //     setSelectedDays([...selectedDays, index]);
  //   }
  // }
  

  function addError() {
    alert("Algo deu errado. Tente novamente.")
    setEnabled(true);
  }

  function addedHabit() {
    // criar hábito na página prinicipal
    // desmarcar botões
    console.log("aH", selectedDays)
    setEnabled(true);
    setTask("");
    hideBox();
    habitCallToServer();
  }

  function createNewHabit (e) {
    setEnabled(false);
    e.preventDefault();
    // only allow data to be sent when at least one day is selected
    // botão de adicionar faz o que enquanto o setEnabled tá false? Preciso desativar ele também?

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const body = {
      name: task,
      days: selectedDays,
    };

    if (selectedDays.length !== 0) {
      const promise = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        body,
        config
      );

      promise.then(addedHabit);
      promise.catch(addError);
    } else {
      alert("Escolha pelo menos 1 dia para realizar o hábito.")
      setEnabled(true);
    }
    
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
        <DayHolder clickable={enabled}>
          {days.map((day, index) =>
            <DayButton 
              key={index} 
              day={day} 
              index={index} 
              selectedDays={selectedDays} 
              setSelectedDays={setSelectedDays} 
            />)}
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