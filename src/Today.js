import styled from "styled-components";

import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import axios from "axios";
import NoneToday from "./Today/NoneToday";
import TodayHabit from "./Today/TodayHabit";

import Header from "./Header";
import FooterMenu from "./FooterMenu";
import UserContext from "./UserContext";
import { useEffect, useContext, useState } from "react";

export default function Today () {

  let today = dayjs().locale('pt-br').format('dddd, DD/MM');
  console.log(today);

  const { userData, dailyStats } = useContext(UserContext);
  const [todayScreen, setTodayScreen] = useState("");
  const [habitAmount, setHabitAmount] = useState(
    "Nenhum hábito concluído ainda"
  );

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  function loadToday(response) {
    console.log("resp", response)
    response.data.length !== 0 ? (
      setTodayScreen(response.data.map((dailyTask, index) => <TodayHabit dailyTask={dailyTask} key={index} todayCallToServer={todayCallToServer} />))
     ) : (
       setTodayScreen(<NoneToday />)
    );

    response.data.length !== 0 ? setHabitAmount(`${dailyStats}% dos hábitos concluídos`) : setHabitAmount(habitAmount);
  }

  function todayCallToServer () {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
      config
    );

    promise.then(loadToday);
    promise.catch();
  }

  useEffect(() => {
    todayCallToServer();
  }, []);

  return (
    <TodayContents>
      <Header />
      <ThisDate>
        <h2>{today}</h2>
        <p>{habitAmount}</p>
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

  p {
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
    /* on click
    color: #8FC549; */
  }
`;
