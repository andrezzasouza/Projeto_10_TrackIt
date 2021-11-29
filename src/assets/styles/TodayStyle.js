import styled from 'styled-components';

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
`;

const Subtitle = styled.p`
  font-size: 17.976px;
  line-height: 22px;

  color: ${(props) => (props.done ? '#8FC549' : '#bababa')};
`;

const NoTodayStyle = styled.div`
  width: 338px;
  font-size: 17.976px;
  line-height: 22px;
  text-align: left;
  color: #666666;
`;

const TodayHabitStyle = styled.div`
  width: 100%;
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
    word-break: break-all;
  }

  p {
    font-size: 12.976px;
    line-height: 16px;
  }
`;

const CurrentStyle = styled.span`
  color: ${(props) => (props.done ? '#8FC549' : '#666666')};
`;

const HighestStyle = styled.span`
  color: ${(props) => (props.record ? '#8FC549' : '#666666')};
`;

const CheckButton = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 5px;
  background-color: ${(props) => (props.done ? '#8FC549' : '#ebebeb')};
  border: ${(props) => (props.done ? 'none' : '1px solid #e7e7e7')};
`;

export {
  TodayContents,
  ThisDate,
  Subtitle,
  NoTodayStyle,
  CheckButton,
  HighestStyle,
  CurrentStyle,
  TodayHabitStyle
};
