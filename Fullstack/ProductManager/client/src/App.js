import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import UpdateForm from './components/UpdateForm';


function App() {
  const [loaded, setLoaded] = useState(false);
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
            <div class="d-flex justify-content-around">
              <div class="p-5 container">
                <h2 class="text-center">Add Product!</h2>
                <br></br>
                <ProductForm loaded = {loaded} setLoaded = {setLoaded}></ProductForm>
              </div>
              <br></br>
              <div class="p-5 container">
                <h2 class="text-center">Our Products</h2>
                <br></br>
                <ProductList loaded = {loaded}></ProductList>
              </div>
            </div>
        </Route>
        <Route exact path="/products/:_id">
          <ProductDetail></ProductDetail>
        </Route>
        <Route path="/product/edit/:_id">
          <UpdateForm></UpdateForm>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
