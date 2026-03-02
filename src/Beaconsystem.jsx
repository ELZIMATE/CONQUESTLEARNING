import React, {useState} from 'react'




const Beaconsystem = () => {
    

    const[events, setEvents] = useState([]) //0- we const the setEvent setter and the stateful events that is controlled by the setter setEvents, starting as empty array 
    const[title, changeTitle] = useState("Side Quest name ") //changetitle will change and set the value of the title stateful variable
    const[location, changeLocation] = useState("Where we going") //change location will change and set the value of the location stateful variable
    const[date, changedate] = useState("When we going") //change date will change nad set the date of the date stateful variable 
    const[time, changeTime] = useState("what O clock") //change time will change nad set the time of the time stateful variable 

    const addbecon = () => { //2- addbeacon will const a newbeacon and store the following inside
        const newEvent = { //it will make a newEvent object
            id: Date.now(), //store the current creation date as the id
            title, //it's current title of what is written in box 
            date, //the date of the event/time of what is in box
            time,
            location, //where this will be happening. of what is in box 
        }

    


        setEvents(prev => [...prev, newEvent])//3- take whatever the events array was previously after the most recent update or box input additions, copy it as it was and add the newevent from what we just put in the boxes ontop

        //in othr words copy what is inside the events  array already into this and ontop add the new event to it.
    
        changeTitle("")//make sure the boxes are clean so the writing wont stay
        changeLocation("")//resets it or we can input the usestates () again
        changedate("")
        changeTime("")
    }

    return(
        <div>
                <input value = {title} onChange={e => changeTitle(e.target.value)}></input> {/* inside this input the value will be title if anything changes it will effect title state,
                now when we change something the event obj will be taken and passed inside changetitle setter to change the title state to be literally what is written in the box that is what e target value is */}
                <input value = {location} onChange={e => changeLocation(e.target.value)}></input>
                <input value = {date} onChange={e => changedate(e.target.value)}></input>
                <input value = {time} onChange={e => changeTime(e.target.value)}></input>





            <button onClick = {addbecon} className='RASENGAN'>+</button > {/* 1- add beacon will run, and remember now the current states are set to what is in the box being tracked with event obj and placed inside the stateful var*/}
            <button onClick = {() => setEvents([])} className='RASENGAN'>-</button >

                <ul> {/*the following will be listed out as ul html style aka bullet form showing the nested shit as bullets*/}
        {events.map((event) => ( //go through each {} in events stateful variable stored array after the updates we just made one by one 
        // and remember a new array will be made after .map() => (Events.map), take each {} and put in inside a (event container (event) secretly does const event and puts each {} inside and then attach a number to each one id/current date now) so index will be accept the number position of the event in the array it is in.
            <li key={event.id}> {/*we are making a listing item it wil show the nested shit on the screen which attachs a key number from react that changes each time the index or number position in the array changes*/}
                {event.title} - {event.date} - {event.time} - {event.location} - "join now" {/* please list off each obj and chain the title to show host (event.title) - as well as time to show time (event.time), and of course location to show location (hangout.loation)*/}
            </li> //we are listing it off by attaching a number or key signal tracker from react to correspond to the number position of the object in the array aka {date.now}
        ))}

    </ul> //the following of course is all being displayed in ul style format



        </div>
        

    )

    

}

export default Beaconsystem