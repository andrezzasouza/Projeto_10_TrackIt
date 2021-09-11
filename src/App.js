import './App.css';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Habits from './Habits/Habits';
import Today from './Today';
import History from './History';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
