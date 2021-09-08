import Header from './Header';
import FooterMenu from './FooterMenu';
import styled from 'styled-components';
import { Input } from './LogInSignUp';

export default function Habits () {
  return (
    <Contents>
      <Header />
      <MyHabits>
        <h2>Meus hábitos</h2>
        <button>+</button>
      </MyHabits>
      <AddHabit>
        <Input placeholder="nome do hábito" />
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
          <button>Salvar</button>
        </ButtonHolder>
      </AddHabit>
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

const AddHabit = styled.div`
  width: 340px;
  height: 180px;
  border-radius: 5px;
  padding: 18px 18px 15px 19px;
  margin: 0 0 29px;
  background-color: #ffffff;
`;

const DayHolder = styled.div`
  display: flex;
  margin: 0 0 29px;
`

const DayButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 4px;
  background-color: #ffffff;
  color: #dbdbdb;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    width: 84px;
    height: 35px;
    margin: 0 0 0 4px;
    border-radius: 4.63636px;
    border: none;
    background: #52b6ff;
    color: #ffffff;
    font-family: "Lexend Deca", sans-serif;
  }
`;