import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './components/Product';
export default () => {
    const [ message, setMessage ] = useState("Loading...")
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res=>setMessage(res.data.message)
            )
    }, []);
    return (
        <div className='container'>
           <Product/>
        </div>
    )
}