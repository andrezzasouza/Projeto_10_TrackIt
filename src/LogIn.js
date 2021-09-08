import styled from "styled-components";
import { Container, Logo, Input, BigButton, Alternate } from './LogInSignUp';

export default function LogIn () {
  return (
    <Container>
      <Logo src="./trackit.png" alt="Logo do TrackIt" />
      <Input placeholder="email" />
      <Input placeholder="senha" />
      <BigButton>Entrar</BigButton>
      <Alternate>Não tem uma conta? Cadastre-se!</Alternate>
    </Container>
  );
}

