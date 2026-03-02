import { useEffect } from "react"
import { use } from "react"
import { useState } from "react"

const Listmanipulation = () => {
    const[list, useList] = useState([])
    const[name, addName] = useState()
    const[deadline, addDeadline] = useState()






    const taskmaker = () => {
        const newtask = {
            name,
            deadline,
        }
        useList(prev => [...prev, newtask])
    }

    const deleter = (index) => {
        useList(list.filter((_, i) => i !== index))


    }

        useEffect(() => {
        document.title = `${name}`
    },[name])

    return(<div>
                <input value = {name} onChange = {(event) =>{addName(event.target.value)}}></input>
        <input value = {deadline} type="date" onChange = {(event) => {addDeadline(event.target.value)}}></input>
        <button onClick = {taskmaker}> +tsk </button>
        

        <ul>
            {list.map((task, index) => (<li key = {index}>

                <button onClick = {() => {deleter(index)}}> </button>

                {task.name}<br></br>
                {task.deadline}

            </li>))}
        </ul>
    </div>

    )

}


export default Listmanipulation