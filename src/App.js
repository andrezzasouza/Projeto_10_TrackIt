import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Habits from './Habits/Habits';
import Today from './Today';
import History from './History';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from './UserContext';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState("");
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LogIn />
          </Route>
          <Route path="/cadastro" exact>
            <SignUp />
          </Route>
          <Route path="/habitos" exact>
            <Habits />
          </Route>
          <Route path="/hoje">
            <Today />
          </Route>
          <Route path="/historico" exact>
            <History />
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
