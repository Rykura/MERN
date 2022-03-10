import React, {useState} from 'react';

const User = () =>{

    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState(null)
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")

    return (<>
        <form>
            <div className="form-group">
                <label htmlFor="">First Name: </label>
                <input type="text" className='form-control' onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Last Name: </label>
                <input type="text" className='form-control' onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Email: </label>
                <input type="email" className='form-control' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Password: </label>
                <input type="text" className='form-control' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Confirm Password: </label>
                <input type="text" className='form-control' onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary mt-3" />
        </form>
        <h3>First Name: {firstName}</h3>
        <h3>Last Name: {lastName}</h3>
        <h3>Email: {email}</h3>
        <h3>Password: {password}</h3>
        <h3>Confirm Password: {confirmPassword}</h3>
        
        </>
    )
}

export default User;