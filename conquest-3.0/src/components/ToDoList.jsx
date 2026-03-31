import { useState } from "react"
import NavBar from "./Navbar"
import useFeatures from "../hooks/useFeatures"
import { useEffect } from "react"
import {fetchList, addList} from "../hooks/backendapi/Featuresapi"


const ToDoList = ({list, setList, user, ...feats }) => {

    console.log('list value:', list, 'type:', typeof list)


    const[task, setTask] = useState('')



    useEffect(() => {

        const LISTMAKE = async() => {
            const data = await fetchList()
            if (data){

                setList(Array.isArray(data.ToDos) ? data.ToDos : [])
                }
    
            
        }
        
        LISTMAKE()



    }, [])



    const Listadd = async() => {
        const today = new Date().toISOString().split('T')[0] //today box will hold current date
        const thing = {
            date: today,
            user_id: user.id,
              ToDos: [...(list || []), task]
            

        }

       await addList(thing)

        setList(prev => [...prev, task])
setTask('')

    }

return(
    <>
    <input value={task} onChange={(e) => setTask(e.target.value)}></input>
    <button onClick={Listadd}>Add to List</button>
    

    {(list || []).map((lis) => 
    
    <li key={lis}>


        {lis}

    </li>)}



    <div>
        <NavBar {...feats}/>
    </div>
    </>

    )}




export default ToDoList