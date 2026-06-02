import { addList, addRoutine } from "../../hooks/backendapi/Featuresapi"

const TaskItem = ({
    task,
    priority,
    type,
    days,
    selectedDate,
    setSelectedDate,
    user,
    tasks,
    setListData,
    setTask,
    setPriority,
    setType,
    setDays,
    routine,
    setRoutine,
    setSaveError,
    onClose
}) => {
    const Listadd = async() => { //this function constructs the updated version of the to do list each time we change some shit 
           console.log('task at submit:', task)
        const taskText = task.trim()

        if (!taskText || !user?.id) return

        const newTask = {
    task: taskText,
    complete: false,
    priority: Number(priority),
    type: type,
    days: days
}



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
        setDays([])
        onClose()
        } catch (error) {
            console.error('Unable to add task:', error)
            setSaveError(error.message)
        }

    }

    return(
        <div
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                padding: '16px'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    width: '100%',
                    maxWidth: '420px',
                    borderRadius: '8px',
                    padding: '20px',
                    display: 'grid',
                    gap: '12px'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button type="button" onClick={onClose}>Close</button>
                <input type="date" value={selectedDate || ''} onChange={(e) => setSelectedDate(e.target.value)} />
                <input
                    value={task}
                    placeholder="Task"
                    onChange={(e) => {
                        console.log('typing:', e.target.value)
                        setTask(e.target.value)
                    }}
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Routine">Routine</option>
                    <option value="Spontaneous">Spontaneous</option>
                </select>

                {type === 'Routine' && (
                    <div>
                        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                            <label key={day}>
                                <input
                                    type="checkbox"
                                    checked={days.includes(day)}
                                    onChange={(e) => {
                                        if (e.target.checked)
                                            setDays(prev => [...prev, day])
                                        else setDays(prev => prev.filter(d => d !== day))
                                    }}
                                />
                                {day}
                            </label>
                        ))}
                    </div>
                )}

                <button type="button" onClick={Listadd}>Add to List</button> {/*button here will be clicked and List Add will run when clicking it*/}
            </div>
        </div>
    )
}

export default TaskItem;
