import styled from "styled-components";
import UserContext from "../UserContext";
import { useContext } from "react";

export default function NoneToday() {
  const { setDailyStats } = useContext(UserContext);
  setDailyStats(0);

  // realmente preciso colocar esse stat aqui?

  return (
    <NoTodayStyle>
      <p>
        Você não tem nenhum hábito hoje. Adicione um hábito no dia de hoje para trackear.
      </p>
    </NoTodayStyle>
  );
}

const NoTodayStyle = styled.div`
  width: 338px;
  font-size: 17.976px;
  line-height: 22px;
  text-align: left;
  color: #666666;
`;
