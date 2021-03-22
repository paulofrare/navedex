import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Containers/Home';
import Login from './Containers/Login';
import CreateNaver from './Containers/CreateNaver';
import EditNaver from './Containers/EditNaver';
import ProtectedRoute from './Helpers/ProtectedRoute.js';
import { UserStorage } from './Contexts/UserContext.js';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/create-naver" component={CreateNaver} />
          <ProtectedRoute exact path="/edit-naver" component={EditNaver} />
        </Switch>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
