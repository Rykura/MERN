import React, {useState} from 'react';

const MenuItem = (props)=> {
    
    let [likes, setLikes] = useState(props.likes)
    

    //regular js code can go here before the return statement
    let x = "this is x";
    let y = [2,4,3,21,1];
    
    var liked = false;
    const addOneLike = () =>{
            setLikes(likes+1)
        }

    return (
            <div>
                <h2>{ props.dishName }</h2>
                <p>Price: ${ props.price }</p>
                <p>Number of Likes: { likes }</p>
                <p>{ props.desc }</p>
                <button onClick={addOneLike}>Like</button>
                <hr />
            </div>
            )
    ;
}
export default MenuItem;