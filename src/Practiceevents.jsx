import { useState } from "react"

const Practice = () => {
    const[title, changeTitle] = useState("Side Quest name ")
    const[location, changeLocation] = useState("Where we going")
    const[date, changedate] = useState("When we going")

    const Practiceevent = (e) => {
        changeTitle(e.target.value)
    }

    
    const Practicelocation = (e) => {
        changeLocation(e.target.value)
    }


    const Practicetime = (e) => {
    changedate(e.target.value)
    }
return(
<div>

    <input value = {title} onChange={Practiceevent}></input>
    <input value = {location} onChange={Practicelocation}></input>
    <input value = {date} onChange={Practicetime}></input>
    <p>{title}</p>
    <p>{location}</p>
    <p>{date}</p>


</div>)
}


export default Practice