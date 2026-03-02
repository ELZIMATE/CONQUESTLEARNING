import { useState } from "react"


const ChangeEvent = () => {
    const [eventitle, changeEvent] = useState(" ") //start by destructure and get stateful variable which is eventtitle and will be controlled by the setter ChangeEvent and the useState will start off the eventitle " " empty...
    const [total, changeTotal] = useState(0)
    const [comment, editComment] = useState(" ")
    const[guild, selectGuild] = useState("")
    const[attending, isattending] = useState("Yes")
    



    const alter = (event) => {//upon sensing a change to the eventtitle input value this alter function will run with the event object passed as info 
        changeEvent(event.target.value); //changeEvent setter will track the target value zone of what is being typed inside the event object area to update the title to correspond based on what the user wrote
    }
    const totalchanger = (event) => { 
        changeTotal(event.target.value)
    }

    const typecomment = (event) => {
        editComment(event.target.value)
    }

    const guilds = (event) => {
        selectGuild(event.target.value)
    }


    const attendance = (event) => {
        isattending(event.target.value)
    }



    return(<div><p>{eventitle}</p> {/*the following will display as a paragraph the updates and changes made to the event title after type track by the event object area and passed from the changeevent */}
        <p>{total}</p>{/* the displayers here will have constant updates showing how the setter changes the stateful variable so this will start whatever is next to usestate and when we type the onchange senses the change runs the whole function bs with the event info colleting the info about the changes to the html element and then last stop it is put here to display the setter after*/}
        <p>{comment}</p>
        <b>{guild}</b>
        <input value = {eventitle} onChange={(event) => alter(event)}></input> {/* we are returning a input and in that input the value to be tracked will be whatever the event title is, and when it is changed the alter function will run and pass in the event object tracker to get the info on what we typed and the setter changeevent will hand this to the event title stateful variable to reflect the update */}
        <input value = {total} onChange={(event) => totalchanger(event)} type="number"></input>
        <p>{attending}</p>
        <textarea value = {comment} onChange = {(event) => typecomment(event)} placeholder = "write something nice..."></textarea> {/* inside this text area html element we set the value of stateful variable guild to be tracked,
        when onChange tool senses someone is typing an input to change it go and run the typecomment setter with event object inside; this will update the comment stateful variable to reflect the changes made which event collects the intel from the typed changes inside the text area */}
        <select value = {guild} onChange = { guilds}> {/* value tracked is guild when it senses a change is made to the selector aka we are selecting another option on change will say 'hey you guilds run'. guilds will use the auto made event object that has the info of the changes made and will take that and update the stateful variable of guild thus resulting in the changes updated */}
            <option value =""></option>
            <option value = "Shabeb">Shabeb</option>
            <option value = "Leaf Village">Leaf</option>
            <option value = "Akatsuki">Akatsuki</option>
            <option value = "Fairy Tail">Fairy Tail</option>
        </select>
<label>
    Attending:&nbsp;
        <label> {/* herre is a label that legit just does what it exactly says titles the circle buttons with words to know what option they represent */}
            Yes: 
            <input type = "radio" value = "Yes" //the input type here is a circle button and on this one its value id is Yes so that is how we know to id it when it is clicked
            checked={attending=== "Yes"} //{/*checked = "is this box checked true or false?" if it is checked attending stateful is now yes so guess what it was now changed*/}
            onChange={attendance} //which means it is time for onchange to trigger the attendance setter which again passes the event obj storing the info regarding the change and updates the stateful variable attending to be yes.
            ></input>
            No: 
            <input type = "radio" value = "No" //now here is a no button with id of no in case this one is checked
            checked={attending=== "No"} //has the no button been checked if it has now the stateful variable is changed to be no which means uh ohhhh
            onChange={attendance} //onChange you see that time to run attendance and pass the event with the info to update that stateful variable
            ></input>
        </label>
</label>
        
        </div>
    )
}

export default ChangeEvent