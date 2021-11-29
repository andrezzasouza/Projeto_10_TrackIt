import styled from 'styled-components';

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
    font-family: 'Lexend Deca', sans-serif;
    font-size: 26.976px;
    line-height: 34px;
    vertical-align: middle;
    background-color: #52b6ff;
    color: #ffffff;
  }
`;

const CreatedHabitStyle = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 13px 27px 15px 15px;
  background-color: #ffffff;
  margin: 0 0 10px;
  position: relative;

  p {
    text-align: left;
    color: #666666;
    font-size: 19.976px;
    line-height: 25px;
    margin: 0 0 8px;
    word-break: break-all;
  }
`;

const IconHolder = styled.div`
  position: absolute;
  top: 11px;
  right: 10px;
`;

const AddHabitStyle = styled.div`
  width: 340px;
  height: 180px;
  border-radius: 5px;
  padding: 18px 18px 15px 19px;
  margin: 0 0 29px;
  background-color: #ffffff;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: flex-end;
  opacity: ${(props) => (props.clickable ? 1 : 0.7)};
  pointer-events: ${(props) => (props.clickable ? 'auto' : 'none')};

  button {
    width: 84px;
    height: 35px;
    margin: 29px 0 0 4px;
    border-radius: 4.63636px;
    border: none;
    font-family: 'Lexend Deca', sans-serif;
  }

  & :first-child {
    background-color: #ffffff;
    color: #52b6ff;
  }

  & :last-child {
    background: #52b6ff;
    color: #ffffff;
  }
`;

const NoHabitStyle = styled.div`
  width: 338px;
  font-size: 17.976px;
  line-height: 22px;
  text-align: left;
  color: #666666;
`;

export {
  MyHabits,
  Contents,
  CreatedHabitStyle,
  IconHolder,
  AddHabitStyle,
  ButtonHolder,
  NoHabitStyle
};
