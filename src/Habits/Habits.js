import Header from '../Header';
import FooterMenu from '../FooterMenu';
import AddHabit from './AddHabit';
import NoHabit from "./NoHabit";
import CreatedHabit from './CreatedHabit';

import { IoAddSharp } from "react-icons/io5";
import UserContext from "../UserContext";

import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

export default function Habits () {

  const [ habitScreen, setHabitScreen ] = useState("");
  const [ show, setShow ] = useState(false);

  const { userData } = useContext(UserContext);
  const history = useHistory();

  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };

  function loadTasks(response) {
    response.data.length !== 0 ? setHabitScreen(<CreatedHabit response={response.data} />) : setHabitScreen(<NoHabit />);
    console.log("lT", response);
  }

  function loadingError() {
    alert("Algo deu errado. Tente novamente.");
    history.push("/");
  }
  
  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
      config
    );

    promise.then(loadTasks);
    promise.catch(loadingError);

    // pensar no problema da renderização vazia
  }, []);


  function addBox() {
    setShow(true);
  }

  return (
    <Contents>
      <Header />
      <MyHabits>
        <h2>Meus hábitos</h2>
        <button onClick={addBox}>
          <IoAddSharp color={"#FFFFFF"} title={""} font-size="25px" />
        </button>
      </MyHabits>
      <AddHabit
        show={show}
        setShow={setShow}
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
    font-family: "Lexend Deca", sans-serif;
    font-size: 26.976px;
    line-height: 34px;
    vertical-align: middle;
    background-color: #52b6ff;
    color: #ffffff;
  }
`;



