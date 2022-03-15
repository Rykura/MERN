import logo from './logo.svg';
import './App.css';
import API from './components/API';
import React, {useState} from 'react';
import {
  BrowserRouter, //this allows us to enable routing for the application
  Switch, //this allows us to tell react which components/elements will show conditionally based on the route
  Route, //this allows us to specify the route for a component/element
  Link //just like an anchor tag but it will not reload the whole page
} from "react-router-dom";

function App() {

  const [type, setType] = useState("");
  const [id, setId] = useState(null);

  console.log(id, type)

  return (
    <BrowserRouter>
    <div className="App container mt-5">
      <form className="form-inline">
        <div className="form-row">
          <label>Searching for: </label>
          <select className="form-control" onChange={ (e) => setType(e.target.value) }>
            <option value="" selected disabled hidden>Choose here</option>
            <option value="people">people</option>
            <option value="planets">planets</option>
            <option value="starships">starships</option>
          </select>
        </div>
        <div className="form-group">
          <label>id: </label>
          <input type="number" className="form-control" placeholder="Ex: 1" onChange={ (e) => setId(e.target.value) }></input>
        </div>
        <Link to={ `/${type}/${id}/` }><button className='btn btn-primary mt-3'>Submit</button></Link>
      </form>
        <br />
        <hr />
        <br />
      <Switch>
          <Route exact path = "/:type/:id/">
            <API></API>
          </Route>
      </Switch>

      <div className='container'>
      
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
