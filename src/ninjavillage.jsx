import { useState } from "react"

const Ninjamaker = () => {
    const[ninja, logNinja] =  useState({name: "Naruto",
                                        village: "Konohagakure",
                                        age: 16,
                                        nature: "wind"
    })


    const changeName = (event) => {
        logNinja(n => ({...n, name: event.target.value}))
    }

    const changeVillage = (event) => {
    logNinja(n => ({...n, village: event.target.value}))
    }
    
    const changeAge = (event) => {
    logNinja(n => ({...n, age: event.target.value}))
    }

    const changeNature = (event) => {
    logNinja(n => ({...n, nature: event.target.value}))
    }

    const ninjalister = () => {
        console.log(ninja)
    }
    return(<div>

        <button onClick={ninjalister}>+</button>
        <p>{ninja.name} - {ninja.village} - {ninja.age} - {ninja.nature}</p>
        <input value = {ninja.name} onChange={changeName}></input>
        <input value = {ninja.village} onChange={changeVillage}></input>
        <input value = {ninja.age} onChange={changeAge} type="number"></input>
        <label>Wind</label>
        <input value = "wind" type="radio"
        checked={ninja.nature==="wind"}
        onChange={changeNature}
        ></input>
        <label>Fire</label>
        <input value = "fire" type="radio"
        checked={ninja.nature==="fire"}
        onChange={changeNature}
        ></input>
        <label>Lighting</label>
        <input value = "lighting" type="radio"
        checked={ninja.nature==="lighting"}
        onChange={changeNature}
        ></input>
        <label>Earth</label>
        <input value = "earth" type="radio"
        checked={ninja.nature==="earth"}
        onChange={changeNature}
        ></input>
        <label>Water</label>
        <input value = "water" type="radio"
        checked={ninja.nature==="water"}
        onChange={changeNature}
        ></input>

        
    </div>)
}

export default Ninjamaker
