import React, { Component } from 'react'; //import react and component so that we can use those to create a class component

class User extends Component {
    render() {
        return(
            <div>
                <h2>{ this.props.lastName }, { this.props.firstName }</h2>
                <p>Age: { this.props.age }</p>
                <p>Hair Color: { this.props.hairColor }</p>
                <hr />
            </div>
        )        
    }
}
    
export default User;