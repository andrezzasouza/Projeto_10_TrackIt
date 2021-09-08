import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 68px 36px 0;
`;

const Logo = styled.img`
  width: 180px;
  height: 178.38px;
  margin: 0 auto 32.62px;
`;
const Input = styled.input`
  width: 303px;
  height: 45px;
  margin: 0 0 6px;
  padding: 9px 11px 11px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  color: #666666;
  font-size: 19.976px;
  line-height: 25px;
  font-family: "Lexend Deca", sans-serif;

  &::placeholder {
    color: #dbdbdb;
  }
`;

const BigButton = styled.button`
  width: 303px;
  height: 45px;
  border: none;
  border-radius: 4.63636px;
  margin: 0 0 25px;
  background-color: #52b6ff;
  color: #ffffff;
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
  font-family: "Lexend Deca", sans-serif;
`;

const Alternate = styled.p`
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
`;

export {
  Container,
  Logo,
  Input,
  BigButton,
  Alternate
}