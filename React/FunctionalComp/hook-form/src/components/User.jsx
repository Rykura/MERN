import React, {useState} from 'react';

const User = () =>{

    let [firstName, setFirstName] = useState("")
    const [firstNameError, setFirstNameError] = useState("")

    let [lastName, setLastName] = useState(null)
    const [lastNameError, setLastNameError] = useState("")

    let [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    let [password, setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")

    let [confirmPassword, setConfirmPassword] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length > 0){
            if(e.target.value.length < 2) {
                setFirstNameError("Must be at least 2 characters long!");
            }
            else{
                setFirstNameError("");
            }
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length > 0){
            if(e.target.value.length < 2) {
                setLastNameError("Must be at least 2 characters long!");
            }
            else{
                setLastNameError("");
            }
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length > 0){
            if(e.target.value.length < 5) {
                setEmailError("Must be at least 5 characters long!");
            }
            else{
                setEmailError("");
            }
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length > 0){
            if(e.target.value.length < 8) {
                setPasswordError("Must be at least 8 characters long!");
            }
            else{
                setPasswordError("");
            }
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length > 0){
            if(e.target.value.length < 8) {
                setConfirmPasswordError("Must be at least 8 characters long!");
            }
            else if(e.target.value != password) {
                setConfirmPasswordError("Passwords must match!");
            }
            else{
                setConfirmPasswordError("");
            }
        }
    }

    return (<>
        <form>
            <div className="form-group">
                <label htmlFor="">First Name: </label>
                <input type="text" className='form-control' onChange={handleFirstName}/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Last Name: </label>
                <input type="text" className='form-control' onChange={handleLastName}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Email: </label>
                <input type="email" className='form-control' onChange={handleEmail}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Password: </label>
                <input type="text" className='form-control' onChange={handlePassword}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label htmlFor="">Confirm Password: </label>
                <input type="text" className='form-control' onChange={handleConfirmPassword}/>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
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