import LogIn from './LogIn';
import SignUp from './SignUp';
import Habits from './Habits/Habits';
import Today from './Today/Today';
import History from './History';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from "./UserContext";

function App() {

  const [userData, setUserData] = useState("");
  const [dailyStats, setDailyStats] = useState(0);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, dailyStats, setDailyStats }}
    >
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
          <Route path="/hoje" exact>
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
