import styled from "styled-components";
import { Container, Logo, Input, BigButton, Alternate } from "./LogInSignUp";

export default function SignUp() {
  return (
    <Container>
      <Logo src="./trackit.png" alt="Logo do TrackIt" />
      <Input placeholder="email" />
      <Input placeholder="senha" />
      <Input placeholder="nome" />
      <Input placeholder="foto" />
      <BigButton>Cadastrar</BigButton>
      <Alternate>Já tem uma conta? Faça login!</Alternate>
    </Container>
  );
}

