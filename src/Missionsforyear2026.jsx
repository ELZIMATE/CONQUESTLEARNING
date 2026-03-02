import { useState } from "react"

const Adventurelog = () => {
    const[adventures, addAdventure] =  useState([])
    const[name, addName] = useState('Add name here...')

    const adventuremaker = () =>{
        const newadventure = {
            mission:name 
        }

        addAdventure(prev => [...prev, newadventure])
    }

    const checkoff = (index) => {

        addAdventure(adventures.filter((_, i) => i !== index))//update the state of the adventures array addAdventure(), //go through the adventures array stateful which was mapped when we typed and added shit and return this new array where each i or number position there is not the same as the index from the old mapped array we clicked on
 
    }


    return(
        <div>
        <input value ={name} onChange={(e) => addName(e.target.value)}></input>
        <button onClick={adventuremaker}></button>

        {adventures.map((adv, index) => 
        <li key = {index} onClick={() => checkoff(index)}>
            
            {adv.mission}


        </li>)}



        </div>

    )
}

export default Adventurelog