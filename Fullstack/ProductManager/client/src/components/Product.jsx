import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <div class="form-group">
                <label>Title: </label><br/>
                <input type="text" className="form-control" placeholder="Enter Title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <div class="form-group">
                <label>Price: </label><br/>
                <input type="number" className="form-control" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </div>
            <div class="form-group">
                <label>Description: </label><br/>
                <input type="text" className="form-control" placeholder="Enter Title" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </div>
            <br />
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}