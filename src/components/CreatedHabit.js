import styled from 'styled-components';
import { IoTrashOutline } from 'react-icons/io5';
import axios from 'axios';
import { useContext } from 'react';
import { DayHolder } from '../assets/styles/LogInSignUp';
import UserContext from '../contexts/UserContext';
import HabitDay from './HabitDay';

export default function CreatedHabit({ currentTask, habitCallToServer }) {
  const { userData, setDailyStats } = useContext(UserContext);
  const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`
    }
  };

  function reloadPercentage(response) {
    const totalTasks = response.data.length;
    const amountDone = response.data.filter((amount) => amount.done).length;

    setDailyStats((amountDone * 100) / totalTasks);
  }

  function updatePercentage() {
    const promise = axios.get(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
      config
    );

    promise.then(reloadPercentage);
  }

  function createSuccess() {
    habitCallToServer();
    updatePercentage();
  }

  function deleteTask() {
    const deleteHabit = window.confirm(
      'Você realmente quer deletar esse hábito?'
    );
    if (deleteHabit) {
      const promise = axios.delete(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${currentTask.id}`,
        config
      );
      promise.then(createSuccess);
      promise.catch(() => 'Algo deu errado. Tente novamente.');
    }
  }

  return (
    <CreatedHabitStyle>
      <p>{currentTask.name}</p>
      <IconHolder onClick={() => deleteTask()} id="trash">
        <IoTrashOutline color="#666666" />
      </IconHolder>
      <DayHolder>
        {days.map((day, index) => (
          <HabitDay
            day={day}
            key={index}
            index={index}
            currentTaskDays={currentTask.days}
          />
        ))}
      </DayHolder>
    </CreatedHabitStyle>
  );
}

const CreatedHabitStyle = styled.div`
  width: 100%;
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
