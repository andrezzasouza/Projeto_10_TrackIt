import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import UserContext from './contexts/UserContext';

import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Habits from './pages/Habits';
import Today from './pages/Today';
import History from './pages/History';
import GlobalStyle from './assets/styles/GlobalStyle';

function App() {
  const [userData, setUserData] = useState('');
  const [dailyStats, setDailyStats] = useState(0);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, dailyStats, setDailyStats }}
    >
      <BrowserRouter>
        <GlobalStyle />
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
