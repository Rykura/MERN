import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Link
} from "react-router-dom";

    
const ProductList = (props) => {
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProductList(res.data.results);
            })
            .catch(err => console.error(err));
    },[props.loaded]);
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/delete/' + productId)
            .then(res => {
                let filteredList = productList.filter((product)=>{
                    return product._id != productId
                })
                setProductList(filteredList)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {productList.map((product) =>
                <div key={product._id} className="card mb-2">
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`/products/${product._id}`}>{product.title}</Link></h5>
                        <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
                        <p className="card-text">{product.description}</p>
                        <button className='btn btn-sm btn-danger' onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
    
export default ProductList;