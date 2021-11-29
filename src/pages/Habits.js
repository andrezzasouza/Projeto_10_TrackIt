/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import { IoAddSharp } from 'react-icons/io5';
import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Header from '../assets/styles/Header';
import FooterMenu from '../assets/styles/FooterMenu';
import AddHabit from '../components/AddHabit';
import NoHabit from '../components/NoHabit';
import CreatedHabit from '../components/CreatedHabit';

import UserContext from '../contexts/UserContext';

export default function Habits() {
  const [selectedDays, setSelectedDays] = useState([]);
  const [habitScreen, setHabitScreen] = useState('');
  const [show, setShow] = useState(false);

  const { userData } = useContext(UserContext);

  const history = useHistory();

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`
    }
  };

  function loadingError() {
    alert('Algo deu errado. Tente novamente.');
    history.push('/');
  }

  function addBox() {
    setShow(true);
  }

  function loadTasks(res) {
    res.data.length !== 0
      ? setHabitScreen(
          res.data.map((currentTask, index) => (
            <CreatedHabit
              currentTask={currentTask}
              habitCallToServer={habitCallToServer}
              key={index}
            />
          ))
        )
      : setHabitScreen(<NoHabit />);
  }

  function habitCallToServer() {
    const promise = axios.get(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      config
    );

    promise.then(loadTasks);
    promise.catch(loadingError);
  }

  useEffect(() => {
    habitCallToServer();
  }, [selectedDays]);

  return (
    <Contents>
      <Header />
      <MyHabits>
        <h2>Meus hábitos</h2>
        <button onClick={() => addBox()} type="button">
          <IoAddSharp color="#FFFFFF" title="" font-size="25px" />
        </button>
      </MyHabits>
      <AddHabit
        show={show}
        setShow={setShow}
        habitCallToServer={habitCallToServer}
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
      />
      {habitScreen}
      <FooterMenu />
    </Contents>
  );
}

const Contents = styled.main`
  margin: 90px 17px 111px 18px;
`;

const MyHabits = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 28px;

  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }

  button {
    width: 40px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 26.976px;
    line-height: 34px;
    vertical-align: middle;
    background-color: #52b6ff;
    color: #ffffff;
  }
`;
