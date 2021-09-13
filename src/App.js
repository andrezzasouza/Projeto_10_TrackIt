import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Habits from './Habits/Habits';
import Today from './Today';
import History from './History';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from './UserContext';
import { useState } from 'react';
import SelectionContext from './SelectionContext';

function App() {

  const [userData, setUserData] = useState("");
  const [dailyStats, setDailyStats] = useState(0);
  const [marked, setMarked] = useState(false);
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
            <SelectionContext.Provider value={{ marked, setMarked }}>
              <Habits />
            </SelectionContext.Provider>
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
