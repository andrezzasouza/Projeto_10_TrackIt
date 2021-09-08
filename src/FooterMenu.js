import styled from "styled-components";

export default function FooterMenu () {
  return (
    <Footer>
      <p>Hábitos</p>
      <div>Hoje</div>
      <p>Histórico</p>
    </Footer>
  );
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }

  div {
    height: 91px;
    width: 91px;
    margin-bottom: 50px;
    border-radius: 50%;
    background-color: #52b6ff;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;