/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import styled from 'styled-components';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import axios from 'axios';

import { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NoneToday from '../components/NoneToday';
import TodayHabit from '../components/TodayHabit';
import Header from '../assets/styles/Header';
import FooterMenu from '../assets/styles/FooterMenu';
import UserContext from '../contexts/UserContext';

export default function Today() {
  const today = dayjs().locale('pt-br').format('dddd, DD/MM');

  const history = useHistory();
  const { userData, dailyStats, setDailyStats } = useContext(UserContext);
  const [subtitle, setSubtitle] = useState(false);
  const [todayScreen, setTodayScreen] = useState('');

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`
    }
  };

  function loadError() {
    alert('Algo deu errado.');
    history.push('/');
  }

  function loadToday(response) {
    response.data.length !== 0
      ? setTodayScreen(
          response.data.map((dailyTask, index) => (
            <TodayHabit
              dailyTask={dailyTask}
              key={index}
              todayCallToServer={todayCallToServer}
            />
          ))
        )
      : setTodayScreen(<NoneToday />);

    const totalTasks = response.data.length;
    const amountDone = response.data.filter((amount) => amount.done).length;

    setDailyStats((amountDone * 100) / totalTasks);

    setSubtitle(response.data.length !== 0);
  }

  function todayCallToServer() {
    const promise = axios.get(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',
      config
    );

    promise.then(loadToday);
    promise.catch(loadError);
  }

  useEffect(() => {
    todayCallToServer();
  }, []);

  return (
    <TodayContents>
      <Header />
      <ThisDate>
        <h2>{today}</h2>
        <Subtitle done={subtitle}>
          {subtitle
            ? `${parseInt(dailyStats, 10)}% dos hábitos concluídos`
            : 'Nenhum hábito concluído ainda'}
        </Subtitle>
      </ThisDate>
      {todayScreen}
      <FooterMenu />
    </TodayContents>
  );
}

const TodayContents = styled.main`
  margin: 90px 17px 111px 18px;
`;

const ThisDate = styled.div`
  margin: 0 0 28px;

  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
`;

const Subtitle = styled.p`
  font-size: 17.976px;
  line-height: 22px;

  color: ${(props) => (props.done ? '#8FC549' : '#bababa')};
`;
