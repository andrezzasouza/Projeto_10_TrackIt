import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';

export default function FooterMenu() {
  const { dailyStats } = useContext(UserContext);

  return (
    <Footer>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Link to="/hoje">
        <div>
          <CircularProgressbar
            value={dailyStats}
            text="Hoje"
            styles={buildStyles({
              pathColor: '#FFF',
              textColor: '#FFF',
              trailColor: 'transparent',
              textSize: '17.976px',
              lineHeigh: '22px'
            })}
          />
        </div>
      </Link>
      <Link to="/historico">
        <p>Histórico</p>
      </Link>
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

  a {
    text-decoration: none;
  }

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
    padding: 6px;
    border-radius: 50%;
    background-color: #52b6ff;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
