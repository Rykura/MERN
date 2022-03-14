import React, {useState} from 'react';


const PokemonGen = ()=>{

    //state variable that we will save the array of coins (or array of pokemon, etc;) into
    let [pokemonList, setPokemonList] = useState([])

    const getPokemon = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1126&offset=0")
            .then((response)=>{
                return response.json()
            })
            .then((response)=>{
                setPokemonList(response.results)
            })
            .catch((err)=>{
                console.log("ERROR!!", err )
            })
    }


    return (
        <>
            <button onClick = {getPokemon}>Fetch Pokemon</button>
            {
                pokemonList.map((pokeObj, index)=>{
                    return <div>
                        <h1>{pokeObj.name}</h1>
                        <hr />
                    </div>
                })

            }

        </>
    )
}


export default PokemonGen;