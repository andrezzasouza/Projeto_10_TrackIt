import styled from "styled-components";

import Header from "./shared/Header";
import FooterMenu from "./shared/FooterMenu";

export default function History () {
  return (
    <HistoryContent>
      <Header />
      <MyHistory>
        <h3>Histórico</h3>
        <p>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </p>
      </MyHistory>
      <FooterMenu />
    </HistoryContent>
  );
}

const HistoryContent = styled.div`
  margin: 90px 17px 111px 18px;
`;

const MyHistory = styled.div`
  h3 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }

  p {
    margin: 17px 0 0;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
  }
`;