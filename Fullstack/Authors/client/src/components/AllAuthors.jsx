import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
    Link
} from "react-router-dom";

    
const AllAuthors = (props) => {
    const [authorList, setAuthorList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthorList(res.data.results.sort((a,b) => a.firstName.localeCompare(b.firstName)));
            })
            .catch(err => console.error(err));
    },[props.loaded]);
    
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + authorId)
            .then(res => {
                let filteredList = authorList.filter((author)=>{
                    return author._id != authorId
                })
                setAuthorList(filteredList)
            })
            .catch(err => console.error(err));
    }
    return (
        <div class="container">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Birth Place</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {authorList.map((author) =>
                    <tr key={author._id}>
                        <th scope="row">
                        <img class="rounded-circle mx-2" height="35" width="35" src={author.picURL} data-holder-rendered="true"></img>
                            {author.firstName} {author.lastName}</th>
                        <td>{author.birthCity}, {author.birthCountry}</td>
                        <td>{author.genre}</td>
                        <td>
                            <Link className="btn btn-sm btn-secondary mx-1" to={"/author/edit/" + author._id}>Edit</Link>
                            <button className='btn btn-sm btn-danger mx-1' onClick={(e)=>{deleteAuthor(author._id)}}>Delete</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
            <Link to="/add" className="btn btn-dark">Add Author!</Link>
        </div>
    )
}
    
export default AllAuthors;
