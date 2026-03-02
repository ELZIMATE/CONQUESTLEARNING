import { useState } from "react"

const Jutsuinformation = () => {
    const[jutsulist, listJutsu] = useState([])
    const[jutsuname, listName] = useState('')
    const[jutsunature, listNature] = useState('')
    const[jutsucost, listCost] = useState('')
    const[jutsustatus, listStatus] = useState('Forbidden')

    const addjutsu = () => {
        const newjutsu = {
            jutsuname,
            jutsucost,
            jutsunature,
            jutsustatus,


        }

        listJutsu(prev => [...prev, newjutsu]) 
    }

    return(
        <div>
        
        <input value={jutsuname} onChange = {(e) => {listName(e.target.value)}}></input>
        <input value={jutsucost} onChange = {(e) => {listCost(e.target.value)}} type="number"></input>
        <label>Fire</label>
        <input type="radio" value="Fire" 
            checked={jutsunature==="Fire"}
            onChange={(e) => listNature(e.target.value)}
        ></input>
        <label>Wind</label>
        <input type="radio" value="Wind" 
            checked={jutsunature==="Wind"}
            onChange={(e) => listNature(e.target.value)}
        ></input>
        <label>Water</label>
        <input type="radio" value="Water" 
            checked={jutsunature==="Water"}
            onChange={(e) => listNature(e.target.value)}
        ></input>
        <label>Earth</label>
        <input type="radio" value="Earth" 
            checked={jutsunature==="Earth"}
            onChange={(e) => listNature(e.target.value)}
        ></input>
        <label>Lightning</label>
        <input type="radio" value="Lightning" 
            checked={jutsunature==="Lightning"}
            onChange={(e) => listNature(e.target.value)}
        ></input>
        <button onClick={addjutsu}>+</button>
        <button onClick ={() => {
            if(jutsustatus === "Forbidden"){
                listStatus("Not Forbidden")
            } else{
                listStatus("Forbidden")
            }
        }}>{jutsustatus}</button>
<ul>
        {jutsulist.map((j, index) => (

        
        <li key = {index}>

            {j.jutsuname} - {j.jutsucost} - {j.jutsunature} - {j.jutsustatus}


        </li>))}
</ul>


        
        
        
        </div>
    )
}

export default Jutsuinformation