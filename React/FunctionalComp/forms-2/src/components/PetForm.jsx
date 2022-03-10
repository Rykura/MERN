import React, {useState} from 'react';

const PetForm = () =>{
    //Name, Age, Species, Date
    let [name, setName] = useState("")
    let [age, setAge] = useState(null)
    let [date, setDate] = useState("")
    let [petImg, setPetImg] = useState("")

    return (<>
        <form>
            <div className="form-group">
                <label htmlFor="">Name: </label>
                <input type="text" className='form-control' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Age: </label>
                <input type="number" className='form-control' onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Img: </label>
                <input type="text" className='form-control' onChange={(e) => setPetImg(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Date: </label>
                <input type="date" className='form-control' onChange={(e) => setDate(e.target.value)}/>
            </div>
            <input type="submit" value="Submit" className="btn btn-primary mt-3" />
        </form>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
        <h3>Date: {date}</h3>
        <img src={petImg} alt=""/>
        </>
    )
}

export default PetForm;