import styled from "styled-components";
import { IoCheckmark } from "react-icons/io5";

import Header from "./Header";
import FooterMenu from "./FooterMenu";

export default function Today () {
  return (
    <TodayContents>
      <Header />
      <ThisDate>
        <h2>Segunda, 17/05</h2>
        <p>Nenhum hábito concluído ainda</p>
      </ThisDate>
      <TodayHabit>
        <div>
          <h3>Ler 1 capítulo de livro</h3>
          <div>
            <p>
              Sequência atual: <span>3 dias</span>
            </p>
            <p>
              Seu recorde: <span>5 dias</span>
            </p>
          </div>
        </div>
        <button>
          <IoCheckmark
            color={"#FFFFFF"}
            title={""}
            font-size="56px"
            stroke={"#FFFFFF"}
            stroke-width="10%"
          />
        </button>
      </TodayHabit>
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

const TodayHabit = styled.div`
  width: 340px;
  padding: 13px 11px 15px 15px;
  margin: 0 0 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  color: #666666;

  h3 {
    font-size: 19.976px;
    line-height: 25px;
    margin: 0 0 7px;
  }

  p {
    font-size: 12.976px;
    line-height: 16px;
  }

  span {
    color: #666666;
    /* onclick
    color: #8FC549;
    */
  }

  button {
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background: #ebebeb;
    border: 1px solid #e7e7e7;

    /* on click
    background: #8FC549;
    border: none; */
  }
`;
