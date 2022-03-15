import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function API() {
    let [thing, setThing] = useState({})
    let [tryAgain, setTryAgain] = useState(false)
    let [homeWorld, setHomeWorld] = useState("")
    const { id, type} = useParams();
    
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${type}/${id}/`)
            .then((response) => {
                setThing(response.data);
                setHomeWorld(response.data.homeworld.substr(21))
                //make api call to response.data.homeworld
                    //.then setHomeworld (some state variable) to be the response
            })
            .catch((err) => {
                setTryAgain(!tryAgain);
            });
        })
        
        
    if(type == "people"){
  
        return (
            <div>
                <h1>{thing.name}</h1>
                <h2>Height: {thing.height}</h2>
                <h2>Mass: {thing.mass}</h2>
                <h2>Hair Color: {thing.hair_color}</h2>
                <h2>Skin Color: {thing.skin_color}</h2>
                <h2></h2>
                <Link to={ `${homeWorld}` }><button className='btn btn-primary mt-3'>Home World</button></Link>
        
            </div>
        );
    }

    else if(type == "planets"){
        return (
            <div>
                <h1>{thing.name}</h1>
                <h2> Climate: {thing.climate}</h2>
                <h2> Terrain: {thing.terrain}</h2>
                <h2>Surface Water: {thing.surface_water}</h2>
                <h2>Population: {thing.population}</h2>
            </div>
        );
    }

    else{
        return (
            <div>
                <h1>{thing.name}</h1>
                <h2>Model: {thing.model}</h2>
                <h2>Manufacturer: {thing.manufacturer}</h2>
                <h2>Maximum Atmosepheric Speed: {thing.max_atmosphering_speed}</h2>
                <h2>Crew: {thing.crew}</h2>
                <h2>Passengers: {thing.passengers}</h2>
                <h2>Class: {thing.starship_class}</h2>
                <h2>Cost: {thing.cost_in_credits} credits</h2>
            </div>
        );
    }
}
 
export default API;