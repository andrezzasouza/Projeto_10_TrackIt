import { IoCheckmark } from "react-icons/io5";
import styled from "styled-components";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../UserContext";
import axios from "axios";

export default function TodayHabit( { dailyTask }) {

  const history = useHistory();
  const { userData, dailyStats, setDailyStats } = useContext(UserContext);
  const [taskDone, setTaskDone] = useState(dailyTask.done);
  const [current, setCurrent] = useState(dailyTask.currentSequence);
  const [highest, setHighest] = useState(dailyTask.highestSequence)
  const [record, setRecord] = useState(current === highest && highest !== 0);
  console.log("daily", dailyTask)
  console.log("uD", userData);

  function removeChecked (response) {
    setCurrent(current - 1);
    setHighest(highest - 1);
    if (highest === 1) {
      setRecord(false);
    }
  }

  function addChecked (response) {
    setCurrent(current + 1);
    setHighest(highest + 1);
    if (current === highest) {
      setRecord(true);
    }
  }
  function markAgain (response) {
    // ver como alterar a seleção só daquele checked
  }

  function checkTask () {
    if (dailyTask.done) {
      setTaskDone(!taskDone);
      const promise = axios({
        method: "post",
        url: `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dailyTask.id}/uncheck`,
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
      promise.then(removeChecked);
      promise.catch(markAgain);
    } else {
      setTaskDone(!taskDone);
      const promise = axios({
        method: "post",
        url: `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${dailyTask.id}/check`,
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      });
      promise.then(addChecked);
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
            Sequência atual:{" "}
            <CurrentStyle done={taskDone}>
              {current} dias
            </CurrentStyle>
          </p>
          <p>
            Seu recorde:{" "}
            <HighestStyle record={record}>{highest} dias</HighestStyle>
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
`;

const CurrentStyle = styled.span`
  color: ${(props) => (props.done ? "#8FC549" : "#666666")};
`;

const HighestStyle = styled.span`
  color: ${(props) => (props.record ? "#8FC549" : "#666666")};
`;

const CheckButton = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 5px;
  background-color: ${(props) => props.done ? '#8FC549' : '#ebebeb'};
  border: ${(props) => props.done ? 'none' : '1px solid #e7e7e7'};
`;