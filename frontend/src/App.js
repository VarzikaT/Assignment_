import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Addbook from "./components/AddBook/Addbook";
import Mybooks from "./components/Mybooks/Mybooks";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import EditBook from "./components/EditBook/EditBook";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/books">
          <Mybooks />
        </Route>
        <Route exact path="/addbook">
          <Addbook />
        </Route>
        <Route exact path="/book/:id">
          <EditBook />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
