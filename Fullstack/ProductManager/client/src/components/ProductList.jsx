import React from 'react'
import axios from 'axios';
import {
    Link
} from "react-router-dom";
    
const ProductList = (props) => {
    return (
        <div>
            {props.products.map( (product, i) =>
                <div key={i} className="card mb-1">
                    <div className="card-body">
                        <h5 className="card-title"><Link to={`/products/${product._id}`}>{product.title}</Link></h5>
                        <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
                        <p className="card-text">{product.description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
    
export default ProductList;