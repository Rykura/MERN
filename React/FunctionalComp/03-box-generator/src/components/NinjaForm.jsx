import React, {useState} from 'react';

const NinjaForm = () =>{

    return(
        <form>
            <div className='form-group'>
                <label>Name: </label>
                <input type="text" className='form-control'></input>
            </div>
            <div className='form-group'>
                <label>Img URL: </label>
                <input type="text" className='form-control'></input>
            </div>
            <div className='form-group'>
                <label>Favorite Color: </label>
                <input type="text" className='form-control'></input>
            </div>
            <div className='form-group'>
                <label>Favorite Language: </label>
                <select className='form-select'>
                    <option >Python</option>
                    <option>JS</option>
                    <option>JAVA</option>
                    <option>HTML</option>
                </select>
            </div>
            <input type="submit" className='mt-3'>Add!</input>
        </form>
    )
}

export default NinjaForm;