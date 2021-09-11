// import styled from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { Container, Logo, InputStyle, BigButton, Alternate } from "./LogInSignUp";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {

  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [createName, setCreateName] = useState("");
  const [createPhoto, setCreatePhoto] = useState("");
  const [enabled, setEnabled] = useState(true);

  function signingUp (e) {
    e.preventDefault();
    setEnabled(false);
    
    const signUpData = {
      email: createEmail,
      name: createName,
      image: createPhoto,
      password: createPassword,
    };

    console.log(signUpData)
    // const promise = axios.post(
    //   "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
    //   signUpData
    // );
    // promise.then();
    // promise.catch();
    // bloquear campos trocar cor opacidade e colocando pointer-events: none até o axios responder
    //criar um objeto com os dados pra mandar pro servidor
    //chamar o axios
    // se der certo, redirecionar pra tela de login com useHistory
    // ver comportamento esperado pro erro
    //limpa os campos em algum caso?
  }

  return (
    <Container>
      <Logo src="./trackit.png" alt="Logo do TrackIt" />
      <form onSubmit={signingUp}>
        <InputStyle
          clickable={enabled}
          placeholder="email"
          type="email"
          value={createEmail}
          onChange={(e) => setCreateEmail(e.target.value)}
          required
        />
        <InputStyle
          clickable={enabled}
          placeholder="senha"
          type="password"
          value={createPassword}
          onChange={(e) => setCreatePassword(e.target.value)}
          required
        />
        <InputStyle
          clickable={enabled}
          placeholder="nome"
          type="text"
          value={createName}
          onChange={(e) => setCreateName(e.target.value)}
          required
        />
        <InputStyle
          clickable={enabled}
          placeholder="foto"
          type="url"
          value={createPhoto}
          onChange={(e) => setCreatePhoto(e.target.value)}
          required
        />
        <BigButton 
          type="submit"
          clickable={enabled}
        >
          {enabled ? (
            'Cadastrar'
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
      <Link to="/">
        <Alternate>Já tem uma conta? Faça login!</Alternate>
      </Link>
    </Container>
  );
}

