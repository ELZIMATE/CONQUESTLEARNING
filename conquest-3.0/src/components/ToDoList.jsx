import { useEffect, useState } from "react"
import {fetchList, addList, fetchRoutines, addRoutine} from "../hooks/backendapi/Featuresapi"
import ToDoBar from "./Screens/ToDoBar"
import TaskItem from "./Screens/TaskItem"
import MonthCalendar from "./Screens/MonthCalendar"

const getTaskKey = (item) => `${item.type || ''}|${item.priority || ''}|${item.task || item}` //make a function called get taskKey in here get the item type if empty use empty string instead and do same for setPriority
//now try get tasktext if it doesnt exist just take the whole item obj. Each individual | between these are separators 
//this will end up storing Routine|1|Gym.

const makeDailyRoutine = (routineTask) => ({ //make Daily routine FUNCTION it takes the routine task and 
// copies it in than changes the type of it to be a Routine type task and makes the completion box unchecked.
    ...routineTask,
    type: routineTask.type || 'Routine',
    complete: false
})

const mergeRoutinesForDay = (dayTasks = [], routineTasks = [], selectedDate) => { //day tasks array is assigned and routine tasks array is assigned 
    const todayName = new Date(selectedDate || new Date()).toLocaleDateString('en-CA', { weekday: 'long' }) //today name is made and it is the current day of the week in string form like Monday or Tuesday etc
    const taskKeys = new Set(dayTasks.map(getTaskKey)) // a task key box is made and inside here it makes a new set where it takes the day taks loops through to store each of its task keys.
    const missingRoutines = routineTasks //than a missing routines box is made which will inside routinetasks array filter each of the 
    // individual routine taks checks if the daytasks has this routine task already 
        .filter((routineTask) => !taskKeys.has(getTaskKey(routineTask))
    && (!routineTask.days || routineTask.days.includes(todayName))) //filters and removes them from that day if it is alr there
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
    const[days, setDays] = useState([])
    const[open, setOpen] = useState(false)
    const tasks = listdata || []



        const backday = () => { //this here is to go back in time a day when clicked
        const date = new Date(selectedDate) //we made a date storage const where here it will hold a new date object and assigning this date here to be whatever we put in the input date selector
        date.setDate(date.getDate() - 1) //this will than take away one from the date
        setSelectedDate(date.toISOString().split('T')[0]) //we set our selected date to be that date after we took away 1 

    }



    const frwdday = () => {
        const date = new Date(selectedDate)
        date.setDate(date.getDate() + 1)
        setSelectedDate(date.toISOString().split('T')[0])

    }


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
                const { tasks: dailyTasks, changed } = mergeRoutinesForDay(dayTasks, loadedRoutines, today)

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
const clearTask = tasks[index] //the task to remove is put in this clear task box

        const data = tasks.filter((_, i) => i !== index)
        setListData(data)
        try {
            setSaveError('')
            await addList({
                date: today,
            user_id: user.id,
              ToDos: data

        })
        if(clearTask.type === 'Routine') { //if the task we want to remove is a routine as we got from the select elemenet than
            const updatedRoutine = routine.filter(r => getTaskKey(r) !== getTaskKey(clearTask)) //make a updated routine box where we filter through each routine and 
            // remove that task and use gettaskkey to format them to be that structure of routine|1|gym for example and check if it is the 
            // same as the clear task we want to remove. If it is not the same than we keep it in the routine if it is the same than we remove it from the routine

            setRoutine(updatedRoutine) //go into the setRoutine and update the routine to be the updated routine with that task removed from it
            await addRoutine({ //then we also need to update the routine in the backend to remove that task from the routine list in the backend as well so we call 
            // addRoutine and send it the updated routine with that task removed from it
                user_id: user.id,
                tasks: updatedRoutine
            })
            //this simply updates backend side 
        }
        } catch (error) {
            console.error('Unable to remove task:', error)
            setSaveError(error.message)
        }


    }



    

return(
    <>
    <div>




        <button onClick={() => setOpen(!open)}>Add a task
        </button>

        <button onClick={backday}></button>
        <button onClick ={frwdday}></button>


        {open && (
            <TaskItem
                task={task}
                priority={priority}
                type={type}
                days={days}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                user={user}
                tasks={tasks}
                setListData={setListData}
                setTask={setTask}
                setPriority={setPriority}
                setType={setType}
                setDays={setDays}
                routine={routine}
                setRoutine={setRoutine}
                setSaveError={setSaveError}
                onClose={() => setOpen(false)}
            />
        )}
    </div>

   

    

    {saveError ? <p>{saveError}</p> : null}

    <ToDoBar tasks={tasks}/>
    
    

    {tasks.map((lis, index) => 
    
    <li key={index}>


        {lis.priority} - {lis.task}
        <input type="checkbox" checked={lis.complete}
        onChange={() => {toggleComplete(index)}}
        ></input>
        <button onClick={() => {ListRemoval(index)}}>Remove Task</button>

    </li>

)}


<MonthCalendar/>
</>
)}

export default ToDoList
