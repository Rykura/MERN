import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../components/Product';
import ProductList from '../components/ProductList';
import {
    Link
  } from "react-router-dom";

const Main = (props) => {

    const [ products, setProducts ] = useState([])
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data.results);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    return (
        <div className='container'>
           <Product/>
           <hr/>
           {loaded && <ProductList products={products}/>}
        </div>
    )
}

export default Main;
