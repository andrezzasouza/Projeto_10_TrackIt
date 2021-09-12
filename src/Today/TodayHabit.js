import { IoCheckmark } from "react-icons/io5";
import styled from "styled-components";
import { useState, useContext } from "react";
import UserContext from "../UserContext";
import axios from "axios";

export default function TodayHabit( { dailyTask }) {

  const { userData, dailyStats, setDailyStats } = useContext(UserContext);
  const [taskDone, setTaskDone] = useState(false);
  console.log("daily", dailyTask)

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  function updateChecked (response) {
    console.log(response);
  }
  function markAgain (response) {
    setTaskDone(!taskDone);
    console.log(response);
  }

  function checkTask () {
    if (taskDone) {
      setTaskDone(!taskDone);
      const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dailyTask.id}/uncheck`, 
      config)
      promise.then((response) => console.log(response));
      promise.catch(markAgain);
    } else {
      setTaskDone(!taskDone);
      const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dailyTask.id}/check`,
      config)
      promise.then(updateChecked);
      promise.catch(markAgain);
    }
    
    // aumentar dias feitos e recorde se igual a dias feitos
    // mandar pro axios
    // se axios der certo, mantém
      // calcula quantas tarefas do total foram concluídas e atualiza estado da porcentagem no setDailyStats 
    // senão, desmarca e reseta os valores
  }

  return (
    <TodayHabitStyle>
      <div>
        <h3>{dailyTask.name}</h3>
        <div>
          <p>
            Sequência atual: <span>{dailyTask.currentSequence} dias</span>
          </p>
          <p>
            Seu recorde: <span>{dailyTask.highestSequence} dias</span>
          </p>
        </div>
      </div>
      <CheckButton done={taskDone} onClick={checkTask}>
        <IoCheckmark
          color={"#FFFFFF"}
          title={""}
          font-size="56px"
          stroke={"#FFFFFF"}
          stroke-width="10%"
        />
      </CheckButton>
    </TodayHabitStyle>
  );
}

const TodayHabitStyle = styled.div`
  width: 340px;
  padding: 13px 11px 15px 15px;
  margin: 0 0 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  color: #666666;

  h3 {
    font-size: 19.976px;
    line-height: 25px;
    margin: 0 0 7px;
  }

  p {
    font-size: 12.976px;
    line-height: 16px;
  }

  span {
    color: #666666;
    /* onclick
    color: #8FC549;
    */
  }
`;

const CheckButton = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 5px;
  background-color: ${(props) => props.done ? '#8FC549' : '#ebebeb'};
  border: ${(props) => props.done ? 'none' : '1px solid #e7e7e7'};
`;