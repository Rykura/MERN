import React, {useState} from 'react';

const ToDoList = ()=>{
    let [toDo, setTodo] = useState("");
    let [done, setDone] = useState(false)
    let [toDoList, setToDoList] = useState([])


    const submitHandler = (e)=>{
        e.preventDefault();
        let newToDo = {toDo,done}
        setTodo("")
        setDone(false)
        setToDoList([...toDoList, newToDo])
    }


    const deleteToDo = (i)=>{ 
        let filteredToDoList = toDoList.filter((item,index)=>{
            return index!=i;
        })
        setToDoList(filteredToDoList)
    }

    const updateToDo = (i)=>{
        let copyOfToDoList = [...toDoList]
        copyOfToDoList[i].done = !copyOfToDoList[i].done
        setToDoList(copyOfToDoList)
    }

    return (
        <>
        <form onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">To Do:</label>
                <input type="text" name="" id="" className="form-control" onChange={(e)=>{setTodo(e.target.value)}} value={toDo}/>
            </div>
            <input type="submit" value="Add!" className="btn btn-primary mt-3" />

            </form>
            {
                toDoList.map((item,i)=>{
                  const toDoClass = [];
                  if(item.done){
                      toDoClass.push("text-decoration-line-through")
                  }
                  return <div key={i} id="listitem">
                      <h1 className={toDoClass}>{item.toDo}</h1>
                      <button onClick={()=>deleteToDo(i)} className="btn btn-dark">Delete</button>
                      <label htmlFor="">Click When Done</label>
                      <input onClick = {()=>updateToDo(i)} type="checkbox" name="" id="" />
                      <hr />
                  </div>
              }) 
            }
        </>
            
    )
}
export default ToDoList;