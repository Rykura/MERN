import React, { Component } from 'react'; //import react and component so that we can use those to create a class component

class MenuItem extends Component {
    render() {
        return(
            <div>
                <h2>{ this.props.dishName }</h2>
                <p>Price: ${ this.props.price }</p>
                <p>Number of Likes: { this.props.likes }</p>
                <p>{ this.props.desc }</p>
                <hr />
            </div>

        )        
    }
}
    
export default MenuItem;