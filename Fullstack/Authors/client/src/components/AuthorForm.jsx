import React, { useState } from 'react'
import axios from 'axios';
import { useHistory, Link } from "react-router-dom";


const AuthorForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthCity, setBirthCity] = useState("");
    const [birthCountry, setBirthCountry] = useState("");
    const [genre, setGenre] = useState("");
    const [picURL, setPicURL] = useState("");
    const history = useHistory();
    const [formErrors, setFormErrors] = useState({})

    const createAuthor = (e) => {
        e.preventDefault();
        let formInputs = {firstName, lastName, birthCountry, birthCity, genre, picURL };

        axios.post('http://localhost:8000/api/authors/new', formInputs)
            .then(res => {
                console.log(res);
                if(res.data.error){
                    setFormErrors(res.data.error.errors);
                }
                else{
                    props.setLoaded(!props.loaded)
                    setFirstName("");
                    setLastName("");
                    setBirthCountry("");
                    setBirthCity("");
                    setGenre("");
                    setPicURL("");
                    setFormErrors({});
                    history.push("/")
                }
            })    
            .catch(err => console.log(err))
    }

    return (
        <form onSubmit={createAuthor}>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>First Name: </label><br/>
                        <input type="text" className="form-control" placeholder="Enter First Name" onChange={(e)=>setFirstName(e.target.value)} value={firstName}/>
                        <p className="text-danger">{formErrors.firstName?.message}</p>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label>Last Name: </label><br/>
                        <input type="text" className="form-control" placeholder="Enter Last Name" onChange={(e)=>setLastName(e.target.value)} value={lastName}/>
                        <p className="text-danger">{formErrors.lastName?.message}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label>Country of Birth: </label><br/>
                        <input type="text" className="form-control" placeholder="Enter Country" onChange={(e)=>setBirthCountry(e.target.value)} value={birthCountry}/>
                        <p className="text-danger">{formErrors.birthCountry?.message}</p>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label>City of Birth: </label><br/>
                        <input type="text" className="form-control" placeholder="Enter City" onChange={(e)=>setBirthCity(e.target.value)} value={birthCity}/>
                        <p className="text-danger">{formErrors.birthCity?.message}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-md-4">
                    <div class="form-group">
                        <label for="genre" >Genre</label>
                        <select name="genre" class="form-control" onChange={(e)=>setGenre(e.target.value)} value={genre}>
                            <option value="none" selected>-- Select a Genre --</option>
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
                        <p className="text-danger">{formErrors.genre?.message}</p>
                    </div>
                </div>
                <div class="form-group col-md-8">
                    <div class="form-group">
                        <label>Picture URL: </label><br/>
                        <input type="text" className="form-control" placeholder="Enter URL" onChange={(e)=>setPicURL(e.target.value)} value={picURL}/>
                        <p className="text-danger">{formErrors.picURL?.message}</p>
                    </div>
                </div>
            </div>
            <Link className="btn btn-secondary mx-1" to={"/"}>Cancel</Link>
            <button type="submit" class="btn btn-dark">Add Author!</button>
        </form>
    )
}

export default AuthorForm;