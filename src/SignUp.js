import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { Container, Logo, InputStyle, BigButton, Alternate } from "./shared/LogInSignUp";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {

  const [createEmail, setCreateEmail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [createName, setCreateName] = useState("");
  const [createPhoto, setCreatePhoto] = useState("");
  const [enabled, setEnabled] = useState(true);

  const history = useHistory();

  function createUser() {
    history.push("/");
    setCreateEmail("");
    setCreatePassword("");
    setCreateName("");
    setCreatePhoto("");
    setEnabled(true);
  }

  function creationError (response) {
    console.log("res", response)
    alert("Algo deu errado. Tente novamente.");
    setEnabled(true);
  }

  function signingUp (e) {
    e.preventDefault();
    setEnabled(false);

    const body = {
      email: createEmail,
      name: createName,
      image: createPhoto,
      password: createPassword
    };
    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );

    console.log(body);
    promise.then(createUser);
    promise.catch(creationError);
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
            />
           )}
        </BigButton>
      </form>
      <Link to={enabled ? "/" : ""}>
        <Alternate>Já tem uma conta? Faça login!</Alternate>
      </Link>
    </Container>
  );
}

