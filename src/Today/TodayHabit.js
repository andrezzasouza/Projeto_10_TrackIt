import { IoCheckmark } from "react-icons/io5";
import styled from "styled-components";

export default function TodayHabit( { dailyTask }) {

  return (
    <TodayHabitStyle>
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
    </TodayHabitStyle>
  );
}

const TodayHabitStyle = styled.div`
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