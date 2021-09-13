import styled from "styled-components";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function NoHabit () {

  const { setDailyStats } = useContext(UserContext);
  setDailyStats(0);

  return (
    <NoHabitStyle>
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
    </NoHabitStyle>
  );
}

const NoHabitStyle = styled.div`
  width: 338px;
  font-size: 17.976px;
  line-height: 22px;
  text-align: left;
  color: #666666;
`;