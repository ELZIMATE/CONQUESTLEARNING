import { useState } from "react"
import NavBar from "./Navbar"
import useFeatures from "../hooks/useFeatures"

const ToDoList = ({list, setList, ...feats}) => {


    const[task, setTask] = useState('')



    const listadder = () => { 

        setList([...list, task])
        setTask('')
    }

return(
    <>
    <input value={task} onChange={(e) => setTask(e.target.value)}></input>
    <button onClick={listadder}>Add to List</button>
    

    {list.map((lis) => 
    
    <li key={lis}>


        {lis}

    </li>)}



    <div>
        <NavBar {...feats}/>
    </div>
    </>

    )}




export default ToDoList