import './App.css';
import { UserContextProvider } from './context/user';
import { Home, Profile } from './pages';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
