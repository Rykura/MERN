import React from 'react';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav class="navbar navbar-dark bg-dark px-5">
          <h1 className='text-white'>Products.com</h1>
          <Link to="/" className="btn btn-primary">Home</Link>
        </nav>
        <br></br>
      </div>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route exact path="/products/:_id">
          <Detail></Detail>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
