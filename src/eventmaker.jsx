import { useState } from "react"

const Eventmade = () => {
    const[event, makeEvent] = useState([]) //makeEvent will control what goes inside event which has an array [] so what goes in that

    const newevent = () =>  { //our newevent function which will literally add into the event array 
        const addevent = document.getElementById("eventinput").value //when we run new event this addevent variable is made and each time will store .value of what is put inside the input box as directed by the 
        //eventinput id which is attached into it
        document.getElementById("eventinput").value = '' //now that what was put into the box is being held by the addevent variable we can clear the input bar so when we press button it will reset


        makeEvent(prev => [...prev, addevent])//makeevent setter is ran and when we make prev or the obj inside here it stores the last update made to the events stateful, we ...prev copy it into the 
        //a new array and add the addevent made by the new event function ontop so that way it stacks when we go to display or map the events stateful array.
    }
    return(<div>

    
        <input id="eventinput"/> {/* here we have the input box and the id which is linked to the addevent variable that when we type shit in we get what is inside via doms id  */}
        <button onClick={newevent}>add+</button> {/* here is the button or trigger as I like to call it when clicked the addevent design function will do what we said above get event from what was first tuped
        in the event input box, reset the box than use the makeevent setter to update the stateful array storing all the made events. */}

        {event.map((e, index) => <li key = {index}>{e}</li>)} {/* using .map this function will take 2 parms one will be e which is each individual obj split up in the stateful array and the index which is the numbered poistion of that obj in the array 
        with these two parms we will use the info and make a li list element html than use react key tracker attached ini to keep track of each one by its number positon making updates when one is added or removed, now last under this lister element html show the individual e obj from array */}
        </div>
    )
}

export default Eventmade