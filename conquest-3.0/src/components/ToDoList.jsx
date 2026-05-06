import { useState } from "react"
import NavBar from "./Navbar"
import useFeatures from "../hooks/useFeatures"
import { useEffect } from "react"
import {fetchList, addList} from "../hooks/backendapi/Featuresapi"
import { removeItem } from "../hooks/backendapi/Featuresapi"
import ToDoBar from "./Screens/ToDoBar"


const ToDoList = ({list, setList, task, setTask, user, listdate, selectedDate, setSelectedDate, setListDate, setListData, listdata, ...feats }) => {




    console.log('list value:', list, 'type:', typeof list)


    
    const[complete, setComplete] = useState(false)
    const[priority, setPriority] = useState(1)
    const tasks = listdata || []


    
    const tskobj = {
        task: task,
        complete: complete, 
        priority: priority,
    }



    useEffect(() => {

        const LISTMAKE = async() => {
            const data = await fetchList(selectedDate)
            if(data) {

                setListData(Array.isArray(data.ToDos) ? data.ToDos : [])
                }
            else{
                setListData(null)
            }
    
            
        }
        
        LISTMAKE()



    }, [selectedDate])


 


    const toggleComplete = async(index) => {
         const today = selectedDate || new Date().toLocaleDateString('en-CA') 

        const updates = tasks.map((item, i) => (
            i === index ? { ...item, complete: !item.complete } : item
        ))
        setListData(updates)
        await addList({
                date: today,
            user_id: user.id,
              ToDos: updates

        })


    }


    const ListRemoval = async(index) => {

const today = selectedDate || new Date().toLocaleDateString('en-CA')
        const data = tasks.filter((_, i) => i !== index)
        setListData(data)
        await addList({
                date: today,
            user_id: user.id,
              ToDos: data

        })


    }



    const Listadd = async() => { //this function constructs the updated version of the to do list each time we change some shit 
        const today = selectedDate || new Date().toLocaleDateString('en-CA') //today box will hold current date
        const thing = { //the thing object here constructs the updated lister with the added task obj
            date: today,
            user_id: user.id,
              ToDos: [...tasks, tskobj]
            

        }

       await addList(thing) //this then takes it and sends the updated version fo the lsit with the new obj to be input inside the backend

        setListData(prev => [...(prev || []), tskobj])
setTask('')

    }

return(
    <>

    <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}></input>
    <input value={task} onChange={(e) => setTask(e.target.value)}></input>
    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>

    </select>
    <button onClick={Listadd}>Add to List</button> {/*button here will be clicked and List Add will run when clicking it*/}

    <ToDoBar tasks={tasks}/>
    
    

    {tasks.map((lis, index) => 
    
    <li key={index}>


        {lis.priority} - {lis.task}
        <input type="checkbox" checked={lis.complete}
        onChange={() => {toggleComplete(index)}}
        ></input>
        <button onClick={() => {ListRemoval(index)}}>Remove Task</button>

    </li>)}




    </>

    )}




export default ToDoList
