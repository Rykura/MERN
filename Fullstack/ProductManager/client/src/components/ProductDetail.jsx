import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
    
const ProductDetail = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState({})
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => setProduct(res.data.results))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = ()=>{
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res=>{
                console.log(res);
                history.push("/");
            })
            .catch(err=>{
                console.log(err)
            })
    }
    
    return (
        <div className='container'>
            <div className="card mb-1">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">${product.price}</h6>
                        <p className="card-text">{product.description}</p>
                        <Link to={"/product/edit/" + product._id}>Edit</Link>
                        <button onClick = {deleteProduct} className='btn btn-danger'>Delete {product.title}</button>
                    </div>
                </div>
        </div>
    )
}
    
export default ProductDetail;