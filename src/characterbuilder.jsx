import { useEffect } from "react"
import { useState } from "react"

const CharacterBuild = () => {//start by listing the compnent function of use 
    const[characters, editCharacters] = useState([]) //destructure the const of the characters stateful var, and the editcharacters which will control it we start ir off with empty array []
    const[role, giveRole] = useState("")//role will store whatever role is and give role will set/change said role
    const[name, applyName] = useState("Name Here") //name will be the variable stateful holding the name of which is put, applyname will manipulate and change it
    const[status, toggleStatus] = useState("Not Ready") //status will have the info on status but decided and controlled by togglestatus setter
    const[colour, setColour] = useState("orange") //set colour controls what the colour is and is beggining as orange
    const[width, setWidth] = useState(window.innerWidth) //setwidth will control the width stateful 
    const[height, setHeight] = useState(window.innerHeight) //same with height 

    useEffect(() => { //1 the component rerenders or changes on screen -> code inside runs 
        document.title = `penis wenis69: ${name}` //2 the title of the document will be that name input (stateful), 
        // for the code here to go again now the status colour needs to change for it to change title  
         
    }, [status, colour])// now with this itll only change the title upon colour status changes 

        const colourChange = () => { //when the colour change function runs
        setColour(c => c === "orange" ? "red":"orange") //set colour goes and checks is the previous colour orange if it is make it red now else keep that shit orange.
    }

useEffect(() =>{window.addEventListener("resize", handleResize) //when some shit in component is changed on screen add an event listener to track the window size
    console.log("EVENT LISTENER ADDED")

    return(() => { //after each time useeffect adds event listener (or in this case status allows it to)  
        window.removeEventListener("resize", handleResize)  //please clean up and return previous event listener before it
        console.log("EVENT LISTENER REMOVED")
    })

}, [status]) //after it auto runs first load in the status now needs to be changed for another event listener to be added
    
    


const handleResize = () => {
        
        setWidth(window.innerWidth) //set width to store the width value inside the stateful
        setHeight(window.innerHeight) //set height to store the height value inside the stateufl
    


}





    const addcharacter = () => {//const a addcharacter function
        const newcharacter = {//when ran this will make a newcharacter variable with obj inside that has 
            role,//role value listed
            name, //name val listed
            status, //status val listed
        }
    
        editCharacters(prev => [...prev, newcharacter])//edit characters now takes the most recent value it had set in the characters stateful and then name it prev copy it and add the newcharacter
        //role name and staus object into it.
    


        
        
    }


    return(//return the following back to the app.jsx component zone to be visible
        <div> {/* stored in a div html element zone */}

            <input value = {name} onChange={(e) => applyName(e.target.value)}></input> {/*the text put in this input box is equivical with the name, when we sense the text here changes an e event is generated
            this applyName setter runs alongside the event obj that gets info about what is in the box (e.target.value) takes the stuff written in the box puts it in name stateful var. */}
            <select value = {role} onChange={(e) => giveRole(e.target.value)}> {/* we make a selector element and have the value of this be equal to whatever the role stateful has in it
             when it senses we are changing the role value than itll gen the same e onj passed into giverole with what it was switched to which puts it inside the stateful role variable*/}
                <option value = ""></option> {/* this time the change will be based on options dropdown, each with unqiue value that when chosen or changed will be picked up by event obj giverole("leader")
                for example will be sent into the role stateful if leader is chosen */}
                {/* breakdown: event = role value was changed.target = option value caused the change.value = value written inside for example value = 'leader' */}
                <option value = "Leader">Leader</option> {/* giveRole setter will now send this info back to role stateful and now role = Leader */}
                <option value = "Co - Leader">Co - Leader</option>
                <option value = "Admin">Admin</option>
                <option value = "Member">Member</option>
            </select>
            <label>
                STATUS
            <li>
                <ul>
                    {status}
                </ul>
            </li>
            </label>
            
            <button onClick={addcharacter}> + </button><br></br> {/* here is a button when clicked will run the addcharacter function and do the shit we said above but based on the input elements we made above
            this is the trigger which makes it all work */}
            <button onClick={() => { {/* now here is the toggle status button you yes you know who you are hated so much, when this is clicked do this () => check status stateful 
            if it is 'Not Ready' (spoiler alert...it is) use setter togglestatus when clicked ofc to change it to "Ready" else if it is already Ready than when clicked go back to Not Ready capish? */}
                if(status=== "Not Ready"){
                    toggleStatus("Ready")
                } else{
                    toggleStatus("Not Ready")
                }
            }}>STATUS </button>
            <button onClick ={colourChange}></button> {/* when this button is pressed the colour is changed*/}

            <ul>
                <p>width: {width} height: {height}</p>
                {characters.map((character, index) =>( //now after all the inputs and change bs happened 
                // we take whatever is inside the characters array from it .map loop it and 
                //define each individual obj in there under name of character and track the number position or index of it inside the array
                    <li key = {index} style={{color: colour}}>{/* the listed items below will show colour change to their style when button is pressed colour change is ran -> setter changes the colour */}
                        {character.name} - {character.role} - {character.status} 
                        {width} - {height}{/* after we have looped and tracked the number position of each individual object list off each character.name,title and status to be displayed */}
                    </li> //IMPORTANT: When map runs it each time is taking the whole characters array after all the changes and updates happen 
                    // by the user each time takes the old prev events and will pull their individual title, role and status out
                    //So on each time we run addcharacter and newcharacter is made 
                    // and prev is copied and updated by 
                    // setEvent to change event stateful update the array with new one it takes the whole array with old event and updates 
                    // loops it 
                    //splits individual obj into (character) variable so character = characters[i] 
                    // basically attached the index to number each one than lists every single name role nad status for each in the array. Bismallah very hard worker map is. 
                ))}
            </ul>
        </div>
    )

    
}

export default CharacterBuild