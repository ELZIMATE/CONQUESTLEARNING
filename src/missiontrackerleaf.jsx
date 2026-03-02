import { useState } from "react"



const Missiontrack = () => {
    const[missions, setMission] = useState([]) //construct the missons array tab, where missions is the stateful variable which is manipulated  by the set missions setter function
    const[title, setTitle] = useState('Write Title') //another one this one is title stateful and is changed by what is ran inside setTitle
    const[ninja, setLeadninja] = useState('Write NAME') //another one this is ninja, changed by what is put inside the setLeadninja
    const[rank, setRank] = useState('A') //another one this is rank, and will change based on what we pass inside setRank


const missionstart = () => {//const the actual function which will be making the missions...
    const newmission = {
        title, 
        ninja,
        rank,
    }

    setMission(prev => [...prev, newmission])//after each new mission is actually made we want to take the old array with the previously updated missions which is what prev is storing here the stateful variable from missions tha
    //which holds the most recent changes and then ...copy prev into that array ontop of that add the new mission. Now replacing with the updated array having the new mission added.
}
return(



<div>
<input value = {title}  onChange = {e =>setTitle(e.target.value)}></input> {/* input value here is added as an insurance policy ensuring what is written in the box corresponds to the title stateful variable value ->
when a change is made here the setTitle is ran but also also a event function is auto made by react the moment of the change
so what happes is we pass the event inside the setTitle which as we know is what manipulates and changes the title stateful and e.target value literally is simply what is written inside the input box,
coz event obj is made to get info about the change and the chained target value finds what we wrote in the box it sends passes it through set title which changes the stateful variable to reflect what was written inside there or what that target value was and updates    */}
<input value = {ninja} onChange = {e =>setLeadninja(e.target.value)}></input>
<label>
Rank Select:
</label>
<input type = "radio" value = 'S' //we are making an inputter herre but changing the type of it to be radio buttons and auto assigns this ones value to be S automatically selected 
checked={rank==='S'} //is the s button the one currently selected? true since the value is input S 
onChange = {e =>setRank(e.target.value)}></input> {/* great so when we change this as in it senses a new button was chosen run setrank and pass in the event obj that'll hold the info for th enew one chosen  
if thats A it will change it will update the rank stateful to have A button be selected and shown*/}
<input type = "radio" value = 'A'
checked={rank==='A'} 
onChange = {e =>setRank(e.target.value)}></input>
<input type = "radio" value = 'B'
checked={rank==='B'} 
onChange = {e =>setRank(e.target.value)}></input>
<input type = "radio" value = 'C'
checked={rank==='C'} 
onChange = {e =>setRank(e.target.value)}></input>

<button onClick = {missionstart}></button>

<ul>
{missions.map((mission, index) => ( //take the missions array loop through for each individual mission obj {} attach a index number or label the posititon for it in the array
    <li key ={index}> {/*please track its position in the array with the position number it is in */} 
        
            
            {mission.title} - {mission.ninja} - {mission.rank} {/*list off th mission title mission ninja and rank for each */}
            

    </li>
))}
    
</ul>
</div>)

} 

export default Missiontrack