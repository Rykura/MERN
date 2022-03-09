import React, { Component } from 'react'; //import react and component so that we can use those to create a class component

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        return(
            <div>
                <h2>{ this.props.lastName }, { this.props.firstName }</h2>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { this.props.hairColor }</p>
                <button onClick= {this.birthday}>Birthday Button!</button>
                <hr />
            </div>
        )        
    }
    birthday = () => {
        this.setState({count:this.state.age++});
    }
}
    
export default User;