import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  padding: 68px 36px 0;

  a {
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 180px;
  height: 178.38px;
  margin: 0 calc((100% - 180px) / 2) 32.62px;
`;
const InputStyle = styled.input`
  width: 100%;
  height: 45px;
  margin: 0 0 6px;
  padding: 9px 11px 11px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  background-color: ${(props) => (props.clickable ? '#FFFFFF' : '#F2F2F2')};
  color: ${(props) => (props.clickable ? '#666666' : '#AFAFAF')};
  font-size: 19.976px;
  line-height: 25px;
  font-family: 'Lexend Deca', sans-serif;
  pointer-events: ${(props) => (props.clickable ? 'auto' : 'none')};

  &::placeholder {
    color: #dbdbdb;
  }
`;

const BigButton = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  border-radius: 4.63636px;
  margin: 0 0 25px;
  background-color: #52b6ff;
  color: #ffffff;
  opacity: ${(props) => (props.clickable ? 1 : 0.7)};
  font-size: 20.976px;
  line-height: 26px;
  text-align: center;
  font-family: 'Lexend Deca', sans-serif;
  pointer-events: ${(props) => (props.clickable ? 'auto' : 'none')};
`;

const Alternate = styled.p`
  font-size: 13.976px;
  line-height: 17px;
  text-align: center;
  text-decoration-line: underline;
  color: #52b6ff;
`;

const DayHolder = styled.div`
  display: flex;
  pointer-events: ${(props) => (props.clickable ? 'auto' : 'none')};
`;

const DayButtonStyle = styled.button`
  width: 30px;
  height: 30px;
  border: ${(props) =>
    props.clicked ? '1px solid #CFCFCF;' : '1px solid #d5d5d5'};
  box-sizing: border-box;
  border-radius: 5px;
  margin-right: 4px;
  background-color: ${(props) => (props.clicked ? '#CFCFCF' : '#ffffff')};
  color: ${(props) => (props.clicked ? '#ffffff' : '#dbdbdb')};
  font-size: 19.976px;
  line-height: 25px;
`;

export {
  Container,
  Logo,
  InputStyle,
  BigButton,
  Alternate,
  DayHolder,
  DayButtonStyle
};
