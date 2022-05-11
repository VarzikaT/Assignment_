import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Route exact path="/" >
        <Login/>
      </Route>
      <Route exact path="/login" >
        <Login/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/home">
        <Dashboard/>
      </Route>
      </BrowserRouter>

    </div>
  
  );
}

export default App;
