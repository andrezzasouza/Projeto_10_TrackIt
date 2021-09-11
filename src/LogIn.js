// import styled from "styled-components";
import { Container, Logo, InputStyle, BigButton, Alternate } from './LogInSignUp';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function LogIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loggingIn (e) {
    e.preventDefault();

    const logInData = {
      email: email,
      password: password
    };

    console.log(logInData)

    // const promise = axios.post(
    //   "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
    //   logInData
    // );
    
    // promise.then();
    // promise.catch();
    // bloquear campos trocar cor opacidade e colocando pointer-events: none até o axios responder
    // chamar o axios
    // se der certo, redirecionar pra tela de hábitos
    // ver comportamento esperado pro erro
    //limpa os campos em algum caso?
    // como compartilhar dados do usuário com todo o app?
  }

  return (
    <Container>
      <Logo src="./trackit.png" alt="Logo do TrackIt" />
      <form onSubmit={loggingIn}>
        <InputStyle
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputStyle
          placeholder="senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <BigButton type="submit">Entrar</BigButton>
      </form>

      <Link to="/cadastro">
        <Alternate>Não tem uma conta? Cadastre-se!</Alternate>
      </Link>
    </Container>
  );
}

