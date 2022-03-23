import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { _id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div className='container'>
            <div className="card mb-1">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
                        <p className="card-text">{product.description}</p>
                    </div>
                </div>
        </div>
    )
}
    
export default Detail;