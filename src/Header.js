import styled from 'styled-components';

export default function Header () {
  return (
    <Heading>
      <h1>TrackIt</h1>
      <img src="" alt="Foto do usuário" />
    </Heading>
  );
}

const Heading = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 18px 10px;
  background-color: #126ba5;

  h1 {
    font-family: "Playball", cursive;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 50%;
  }
`;