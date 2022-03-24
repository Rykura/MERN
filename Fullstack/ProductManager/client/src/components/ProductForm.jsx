import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";


const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState("");
    const history = useHistory();
    const [formErrors, setFormErrors] = useState({})

    const createProduct = (e) => {
        e.preventDefault();
        let formInputs = {title, price, description};

        axios.post('http://localhost:8000/api/products/new', formInputs)
            .then(res => {
                console.log(res);
                if(res.data.error){
                    setFormErrors(res.data.error.errors);
                }
                else{
                    props.setLoaded(!props.loaded)
                    setTitle("");
                    setPrice("");
                    setDescription("");
                    setFormErrors({});
                    history.push("/")
                }
            })    
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={createProduct}>
            <div class="form-group">
                <label>Title: </label><br/>
                <input type="text" className="form-control" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                <p className="text-danger">{formErrors.title?.message}</p>
            </div>
            <div class="form-group">
                <label>Price: </label><br/>
                <input type="number" className="form-control" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
                <p className="text-danger">{formErrors.price?.message}</p>
            </div>
            <div class="form-group">
                <label>Description: </label><br/>
                <input type="text" className="form-control" placeholder="Enter Title" onChange={(e)=>setDescription(e.target.value)} value={description}/>
                <p className="text-danger">{formErrors.description?.message}</p>
            </div>
            <button type="submit" class="btn btn-primary">Add Product!</button>
        </form>
    )
}

export default ProductForm;