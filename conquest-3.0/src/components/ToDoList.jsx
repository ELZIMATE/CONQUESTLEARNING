import { useEffect, useState } from "react"
import {fetchList, addList, fetchRoutines, addRoutine} from "../hooks/backendapi/Featuresapi"
import ToDoBar from "./Screens/ToDoBar"

const getTaskKey = (item) => `${item.type || ''}|${item.priority || ''}|${item.task || item}` //make a function called get taskKey in here get the item type if empty use empty string instead and do same for setPriority
//now try get tasktext if it doesnt exist just take the whole item obj. Each individual | between these are separators 
//this will end up storing Routine|1|Gym.

const makeDailyRoutine = (routineTask) => ({ //make Daily routine FUNCTION it takes the routine task and copies it in than changes the type of it to be a Routine type task and makes the completion box unchecked.
    ...routineTask,
    type: routineTask.type || 'Routine',
    complete: false
})

const mergeRoutinesForDay = (dayTasks = [], routineTasks = []) => { //day tasks array is assigned and routine tasks array is assigned 
    const taskKeys = new Set(dayTasks.map(getTaskKey)) // a task key box is made and inside here it makes a new set where it takes the day taks loops through to store each of its task keys.
    const missingRoutines = routineTasks //than a missing routines box is made which will inside routinetasks array filter each of the individual routine taks checks if the daytasks has this routine task already 
        .filter((routineTask) => !taskKeys.has(getTaskKey(routineTask))) //filters and removes them from that day if it is alr there
        .map(makeDailyRoutine) //maps the remaining ones which do have the routine tag as their type.

    return {
        tasks: [...dayTasks, ...missingRoutines], //adds the newly made routines on the daytasks
        changed: missingRoutines.length > 0 //changes is a bool and it is checking now if missing rotuines is > 0 aka has any missing or new ones been added if not than its false and we dont need to save or make updates.
    }
}


const ToDoList = ({task, setTask, user, selectedDate, setSelectedDate, setListData, listdata }) => {
    const[priority, setPriority] = useState(1)
    const[type, setType] = useState('Routine')
    const[routine, setRoutine] = useState([])
    const[saveError, setSaveError] = useState('')
    const tasks = listdata || []


    useEffect(() => { //synchronisation of useEffect when 

        const LISTMAKE = async() => {
            try {
                if (!user?.id) { //if there is no logged user in the system 
                    setListData([]) //put listdata empty 
                    setRoutine([]) //and put the routine array as empty 
                    return
                }

                const today = selectedDate || new Date().toLocaleDateString('en-CA') //makes today const box and put selected date or just the current date in therre 
                const routineData = await fetchRoutines() //make a routineData box to store the routines array data from supabase
                const loadedRoutines = routineData.flatMap(row => row.tasks || []) //make a loaded Routines box after we dig out the tasks array from the routines spabase with flatmap and even if it is empty store it here 
                setRoutine(loadedRoutines) //make the routines be the ones stored in loaded routines from supabase with setRoutine setter

                const listData = await fetchList(today)
                const dayTasks = Array.isArray(listData?.ToDos) ? listData.ToDos : []
                const { tasks: dailyTasks, changed } = mergeRoutinesForDay(dayTasks, loadedRoutines)

                setListData(dailyTasks)

                if (changed || !listData || !Array.isArray(listData.ToDos)) {
                    await addList({
                        date: today,
                        user_id: user.id,
                        ToDos: dailyTasks
                    })
                }
            } catch (error) {
                console.error('Unable to load to-do list:', error)
                setSaveError(error.message)
                setListData([])
            }
            
    
            
        }
        
        LISTMAKE()



    }, [selectedDate, setListData, user?.id]) //these change


 


    const toggleComplete = async(index) => {
         const today = selectedDate || new Date().toLocaleDateString('en-CA') 

        const updates = tasks.map((item, i) => (
            i === index ? { ...item, complete: !item.complete } : item
        ))
        setListData(updates)
        try {
            setSaveError('')
            await addList({
                date: today,
            user_id: user.id,
              ToDos: updates

        })
        } catch (error) {
            console.error('Unable to update task completion:', error)
            setSaveError(error.message)
        }


    }


    const ListRemoval = async(index) => {

const today = selectedDate || new Date().toLocaleDateString('en-CA')
        const data = tasks.filter((_, i) => i !== index)
        setListData(data)
        try {
            setSaveError('')
            await addList({
                date: today,
            user_id: user.id,
              ToDos: data

        })
        } catch (error) {
            console.error('Unable to remove task:', error)
            setSaveError(error.message)
        }


    }



    const Listadd = async() => { //this function constructs the updated version of the to do list each time we change some shit 
           console.log('task at submit:', task)
        const taskText = task.trim()

        if (!taskText) return



    console.log('tskobj at submit:', newTask)
        const today = selectedDate || new Date().toLocaleDateString('en-CA') //today box will hold current date
        const thing = { //the thing object here constructs the updated lister with the added task obj
            date: today,
            user_id: user.id,
              ToDos: [...tasks, newTask]
            

        }

        try {
            setSaveError('')

       if(type === 'Routine') {
        await addRoutine({
            user_id: user.id,
            tasks: [...routine, newTask]
        })
        setRoutine(prev => [...prev, newTask])
       }

       await addList(thing) //this then takes it and sends the updated version fo the lsit with the new obj to be input inside the backend

        setListData(prev => [...(prev || []), newTask])
setTask('')
        } catch (error) {
            console.error('Unable to add task:', error)
            setSaveError(error.message)
        }

    }

return(
    <>

    <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}></input>
    <input value={task} onChange={(e) => 
        {console.log('typing:', e.target.value)
        
        setTask(e.target.value)}}></input>
    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>

    </select>


    <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Routine">Routine</option>
        <option value="Schedule">Scheduled</option>
        <option value="Spontanous">Spontaneous</option>


    </select>
    <button onClick={Listadd}>Add to List</button> {/*button here will be clicked and List Add will run when clicking it*/}

    {saveError ? <p>{saveError}</p> : null}

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
