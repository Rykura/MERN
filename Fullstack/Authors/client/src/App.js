import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import AllAuthors from './components/AllAuthors'
import AuthorForm from './components/AuthorForm';
import UpdateForm from './components/UpdateForm';

function App() {
  const [loaded, setLoaded] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
      <nav class="navbar navbar-dark bg-dark px-5">
          <h1 className='text-white'>Authors.com</h1>
          <Link to="/" className="btn btn-primary">Home</Link>
        </nav>
        <br></br>
      </div>
      <Switch>
        <Route exact path="/">
          <AllAuthors loaded = {loaded}></AllAuthors>
        </Route>
        <Route exact path="/add">
            <div class="d-flex justify-content-around">
              <div class="container">
                <h2 class="text-center">Add an Author!</h2>
                <br></br>
                <AuthorForm loaded = {loaded} setLoaded = {setLoaded}></AuthorForm>
              </div>
              <br></br>
            </div>
        </Route>
        <Route path="/author/edit/:_id">
          <UpdateForm></UpdateForm>
        </Route>
        <Route exact path="/error">
            <div class="alert alert-primary container" role="alert">
              <h4 class="alert-heading">We're sorry, but we could not find the author you are looking for.</h4>
              <p>Would you like to add this author to our database?</p>
              <hr />
              <Link to="/add" className="btn btn-primary">Add Author</Link>
            </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
