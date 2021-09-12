// import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { Container, Logo, InputStyle, BigButton, Alternate } from './LogInSignUp';
import UserContext from "./UserContext";

import { useHistory, Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';

export default function LogIn () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enabled, setEnabled] = useState(true);

  const { setUserData } = useContext(UserContext);

  const history = useHistory();

  function enter (response) {
    setUserData(response.data)
    console.log(response)
    history.push("/hoje");
    setEmail("");
    setPassword("");
    setEnabled(true);
  }

  function tryAgain () {
    alert("Algo deu errado. Tente novamente.");
    setEnabled(true);
  }

  function loggingIn (e) {
    e.preventDefault();
    setEnabled(false);

    const body = {
      email: email,
      password: password
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
      body
    );
    
    promise.then(enter);
    promise.catch(tryAgain);
  }

  return (
    <Container>
      <Logo src="./trackit.png" alt="Logo do TrackIt" />
      <form onSubmit={loggingIn}>
        <InputStyle
          clickable={enabled}
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputStyle
          clickable={enabled}
          placeholder="senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <BigButton type="submit" clickable={enabled}>
          {enabled ? (
            "Entrar"
          ) : (
            <Loader
              type="ThreeDots"
              color="#FFFFFF"
              height={45}
              width={51}
              // timeout={3000}
            />
          )}
        </BigButton>
      </form>
      <Link to={enabled ? "/cadastro" : ""}>
        <Alternate>
          Não tem uma conta? Cadastre-se!
        </Alternate>
      </Link>
    </Container>
  );
}

