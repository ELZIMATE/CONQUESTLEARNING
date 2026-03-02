import { useState } from "react"

const UseJutsu2 = () => { //make the key function
    const[jutsu, useJutsu] = useState([]) //destructure the stateful jutsu holding the array of jutsus which is controlled by the setter function to make changes useJutsu


const newjutsu = () => {//make a func that controls the button to trigger the adding of shit when clicking after typing it 
    const addjutsu = document.getElementById("jutsuinput").value//retrieve the id of the inputs box and value inside of what we typed, take and put inside addfood variable here
    document.getElementById("jutsuinput").value = ""//than after it is stored clear this shit and reset

    useJutsu(j => [...j, addjutsu])// access jutsu array stored atateful with useJutsu take the last updates made inside it and this is j copy it ...j and then addjutsu the jutsu we typed in the box into the array.

    
    
}

    

    const removejutsu = (index) => {
        useJutsu(jutsu.filter((_, i) => i !== (index)) //using the setter of usejutsu the controller for the jutsu array filter any objects where the i is not the same as the index number of the obj from the jutsu array

        

    )}




    return(<div>
        <button onClick={newjutsu}> Add it</button> {/* newjutsu function runs gets what was put in the boxes aka does the shit above */}
        <input type="text" id ="jutsuinput"/> {/* the typed text is tracked with the id so when it is typed the doms above accesses it and pulls it out to put in the variable so it can be added to the array */}
        <ul>
            {jutsu.map((j, index) => //loop through the jutsu array grab each individual object [j] and the number positon of it [i]
                <li key = {index} onClick={() => {removejutsu(index)}}> {/* attach a updating number tracker based on the number position it is in [key] */}
                {/* when the literal justsu listed obj is clicked the remove jutsu function will run and take the position number (index) info passed into it */}
                    {j}{/* show the object on the screen */}
                </li>
            )}

        </ul>
        </div>)
}

export default UseJutsu2








