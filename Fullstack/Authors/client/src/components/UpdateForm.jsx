import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
    
const UpdateForm = (props) => {
    const [authorInfo, setAuthorInfo] = useState({
        firstName: "",
        lastName: "",
        birthCountry: "",
        birthCity: "",
        picURL: "",
        genre: ""
    });
    const [formErrors, setFormErrors] = useState({})
    const { _id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${_id}`)
            .then(res => {
                if(res.data.error){
                    history.push('/error')
                }
                else{
                    setAuthorInfo(res.data.results);
                }
            })
            .catch(err => console.error(err));
    }, []);

    const changeHandler = (e)=>{
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/update/${_id}`, authorInfo)
            .then(res => {
                if(res.data.error){
                    setFormErrors(res.data.error.errors);
                }
                else{
                    setAuthorInfo(res.data.results);
                    setFormErrors({});
                    history.push('/')
                }
            })    
            .catch(err => console.error(err));
    }
    
    return (
        <form onSubmit={updateAuthor} className="container">
            <h2>Edit {authorInfo.firstName}:</h2>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>First Name: </label><br />
                        <input type="text" name="firstName" className="form-control" value={authorInfo.firstName} onChange={changeHandler} />
                        <p className="text-danger">{formErrors.firstName?.message}</p>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label>Last Name: </label><br />
                        <input type="text" name="lastName" className="form-control" placeholder="Enter Last Name" value={authorInfo.lastName} onChange={changeHandler} />
                        <p className="text-danger">{formErrors.lastName?.message}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Country of Birth: </label><br />
                        <input type="text" name="birthCountry" className="form-control" placeholder="Enter Country" value={authorInfo.birthCountry} onChange={changeHandler} />
                        <p className="text-danger">{formErrors.birthCountry?.message}</p>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label>City of Birth: </label><br />
                        <input type="text" name="birthCity" className="form-control" placeholder="Enter City" value={authorInfo.birthCity} onChange={changeHandler} />
                        <p className="text-danger">{formErrors.birthCity?.message}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-4">
                    <div class="form-group">
                        <label for="genre" >Genre</label>
                        <select name="genre" class="form-control" value={authorInfo.genre} onChange={changeHandler}>
                            <option>Literary Fiction</option>
                            <option>Fantasy</option>
                            <option>Romance</option>
                            <option>Thriller</option>
                            <option>Mystery</option>
                            <option>Horror</option>
                            <option>Historical</option>
                            <option>Dystopian</option>
                            <option>Western</option>
                            <option>Science Fiction</option>
                            <option>Speculative Fiction</option>
                            <option>Magical Realism</option>
                            <option>Realist Literature</option>
                            <option>Bildungsroman</option>
                        </select>
                    </div>
                </div>
                <div class="form-group col-md-8">
                    <div class="form-group">
                        <label>Picture URL: </label><br />
                        <input type="text" name="picURL" className="form-control" placeholder="Enter URL" value={authorInfo.picURL} onChange={changeHandler} />
                        <p className="text-danger">{formErrors.picURL?.message}</p>
                    </div>
                </div>
            </div>
            <Link className="btn btn-secondary mx-1" to={"/"}>Cancel</Link>
            <button type="submit" class="btn btn-dark mx-1">Update Author!</button>
        </form>
    )
}
    
export default UpdateForm;