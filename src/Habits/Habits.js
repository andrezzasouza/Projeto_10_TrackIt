import Header from '../Header';
import FooterMenu from '../FooterMenu';
import AddHabit from './AddHabit';

import styled from 'styled-components';
import { IoTrashOutline, IoAddSharp } from 'react-icons/io5';
import { DayButton, DayHolder } from '../LogInSignUp';

export default function Habits () {
  return (
    <Contents>
      <Header />
      <MyHabits>
        <h2>Meus hábitos</h2>
        <button>
          <IoAddSharp color={"#FFFFFF"} title={""} font-size="25px" />
        </button>
      </MyHabits>
      <AddHabit />
      <CreatedHabits>
        <p>Ler 1 capítulo de livro</p>
        <IconHolder>
          <IoTrashOutline color={"#666666"} />
        </IconHolder>
        <DayHolder>
          <DayButton>D</DayButton>
          <DayButton>S</DayButton>
          <DayButton>T</DayButton>
          <DayButton>Q</DayButton>
          <DayButton>Q</DayButton>
          <DayButton>S</DayButton>
          <DayButton>S</DayButton>
        </DayHolder>
      </CreatedHabits>
      <NoHabits>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </NoHabits>
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

const NoHabits = styled.div`
  width: 338px;
  font-size: 17.976px;
  line-height: 22px;
  text-align: left;
  color: #666666;
`;

const CreatedHabits = styled.div`
  width: 340px;
  border-radius: 5px;
  padding: 13px 11px 15px 15px;
  background-color: #ffffff;
  margin: 0 0 10px;
  position: relative;

  p {
    text-align: left;
    color: #666666;
    font-size: 19.976px;
    line-height: 25px;
    margin: 0 0 8px;
  }
`;

const IconHolder = styled.div`
  position: absolute;
  top: 11px;
  right: 10px;
`