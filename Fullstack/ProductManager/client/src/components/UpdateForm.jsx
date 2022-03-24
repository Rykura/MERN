import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
    
const UpdateForm = (props) => {
    const [productInfo, setProductInfo] = useState({
        title: "",
        price: "",
        description: ""
    });
    const [formErrors, setFormErrors] = useState({})
    const { _id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${_id}`)
            .then(res => {
                    setProductInfo(res.data.results);
            })
    }, []);

    const changeHandler = (e)=>{
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const updateProduct = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${_id}`, productInfo)
            .then(res => {
                if(res.data.error){
                    setFormErrors(res.data.error.errors);
                }
                else{
                    setProductInfo(res.data.results);
                    setFormErrors({});
                    history.push('/')
                }
            })    
            .catch(err => console.error(err));
    }
    
    return (
        <form onSubmit={updateProduct} className="container">
            <h2>Edit {productInfo.title}:</h2>
            <div class="form-group">
                <label>Title: </label><br/>
                <input type="text" name="title" value={productInfo.title} className="form-control" placeholder="Enter Title" onChange={changeHandler}/>
                <p className="text-danger">{formErrors.title?.message}</p>
            </div>
            <div class="form-group">
                <label>Price: </label><br/>
                <input type="number" name="price" value={productInfo.price} className="form-control" placeholder="Enter Price" onChange={changeHandler}/>
                <p className="text-danger">{formErrors.price?.message}</p>
            </div>
            <div class="form-group">
                <label>Description: </label><br/>
                <input type="text" name="description" value={productInfo.description} className="form-control" placeholder="Enter Title" onChange={changeHandler}/>
                <p className="text-danger">{formErrors.description?.message}</p>
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}
    
export default UpdateForm;