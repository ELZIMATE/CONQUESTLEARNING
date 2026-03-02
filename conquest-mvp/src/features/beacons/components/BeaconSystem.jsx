import {useState } from "react"
import useBeacons from "../hooks/useBeacons" //we are importing the hooks aka mini functions which are kept in useBeacons.js file

const BeaconSystem = ({ rsvpABeacon,  beacons, deleteABeacon, clearABeacon, addNewBeacon, loading, error, selectedLat, selectedLng, username, setUsername}) => { //beacon system will be using the following hooks throughout the process 
// when used the info created by inside here will be passed and ran into those functions 
     //they have been imported for quick use from their js storage unit 
    // and destructured.
    //we know...
    //beacons is the stateful which holds the array constantly being altered by 
    //delBeacons - if we wanna delete one 
    //clearBeacons - if we want to clear all of em 
    //addBeacons - if we want to make one as per usual

    //PART A - bringing inn the tools we need to use for the following code

    
const[title, setTitle] = useState("") //we start by destructuring the part title stateful which will
//  be changed by the setTitle setter got string inside.
const[location, setLocation] = useState("")//same for location location altered by setLocation
const[date, setDate] = useState("")//date altered by setDate and started off as "" in useState
const[time, setTime]= useState("") //time altered by setTime and started off as "" in useState '
const[intent, setIntent] = useState("")


//PART B - setting up the statefuls which will be changed and altering the information which will be used




const beaconMaker = async () => {//we make a function which will literally make the newBeacons and bring to life after the info above is set
{/*STEP 2 here what we put in box is collated and put inside the beacon obj const */}
    if(!title || !location || selectedLat == null || selectedLng == null) return //if the user doesnt put a title or location detail return back and do fuck all, this is just emergency
    
    //abort mission if they dont put crucial details
    console.log(selectedLat, selectedLng)
    const beacon = {//newBeacon, will be made and consist of
        id: Date.now(), //id will be assigned to be the current date
        username,
        title, //title is whatever the stateful of title is atm or changed to by setters above 
        location, //same for location
        intent, 
        date, //date 
        time, //time
        lng: Number(selectedLng),
        lat: Number(selectedLat),
        attendees:[],
        
    }
    

    
{/*STEP 3 IT IS THEN SENT TO THE ADDNEWBEACON INSIDE THE HOOKS WITH THE BEACON OBJ PUT INSIDE */}
    await addNewBeacon(beacon) //once newbeacon is storing the info we take the addbeacons function we made which will copy the most recent updates 
    //which was made to the beacons array from useBeacons copy it into a fresh array and update to have this new beacon made ontop.
{/*STEP 3 than proceed to pause all the other shit in this function and wait for the info from addNewBeacon func to fin*/}

//after beacons is made and stored we now can
    setTitle(""); //clear the title stateful
    setLocation(""); // location too
    setIntent("")
    setDate(""); // date too
    setTime(""); //setTime too
    setUsername(" ")
}

//PART C - We make the beacons with a function that take the info stored/altered above by setters inside stateful
// collates it than using a imported addbeacons we put the newbeacon
//which was made ontop in new array. Clear the statefuls fresh to store new shit.


return( //NOW ENTERING DISPLAY ZONE

    //STEP 1 WE TYPE OUT DETAILS IN THE BOXES...
    <div>
        <input value = {username} onChange={(e) => {setUsername(e.target.value) //grab what was typed in the username login section
            localStorage.setItem('username', e.target.value) //please than take the local storage open it and put the username to be what we typed
        }}/>
    <input value = {title} onChange={(e) => setTitle(e.target.value)}></input> {/* we make a html element which has the value here be the title
    when this is changed setTitle setter will run and auto pass the event auto made obj 
    which will take whatever was put in the input box to now be
    whats is inside the title stateful  */}
    <input value = {location} onChange={(e) => setLocation(e.target.value)}></input> {/* translation: this is the location box 
    when you sense something in this location box is changing take the 
    event obj you just made holding the info about what was changed inside pass
    it to setLocation so now the location state cna be altered to be whatever you put or changed inside */}
    <select value = {intent} onChange={(e) => setIntent(e.target.value)}>
        <option value = "chill">chill</option>
        <option value = "build">build</option>
        <option value = "learn">learn</option>
        <option value = "explore">explore</option>
    </select>
    <input value = {date} type="date" onChange={(e) => setDate(e.target.value)}></input>
    <input value = {time} type="time" onChange={(e) => setTime(e.target.value)}></input>

    
    {/*STEP 1 WE TYPE OUT DETAILS IN THE BOXES...*/}
    {/*STEP 2 WE CLICK THE BUTTON TO ADD SHIT */}
    <button onClick={beaconMaker}>+</button> {/*now here we make a button that when pressed runs the beacon maker which is already storing 
    the altered statefuls that it collates when it is ran since we changed
    them with the inputters above this is the trigger that just brings it
    all together and updates*/}
    {/*STEP 2 BEACON MAKER IS RAN JUMP TO THAT FUNCTION AREA ABOVE */}
    {loading && <p>Loading data...</p>} {/* if loading is true than please show the message loading data otherwise it does nothing */}
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <button onClick = {clearABeacon}>Clear</button>{/* next we do the 
    same but this is a direct link to the beacon clearance from the useBeacons
    storage unit js mutate the whole beacon and clear all events */}
    {/* both buttons above here are made independant put at the forefront on their own zone */}

    {/*PART D - MAKING THE CONTROLS*/}

    <ul> {/* NOW we want to actually show the shit as an unordered list here below will output how we show it */}
        {beacons.map((b, index) => // we use map loop through our whole beacons array state with 
        // all the updates made after the inputs are passed
        //it grabs each obj under the parameter of b and the positon of them in the array under the parameter of index.
        <li key = {b.id ?? Math.random()}> {/* now for each object we make a list element basically list off the following 
            whilst also attach the id
        so that way if any changes are made to the array deleting or adding it can track each b */}
        {/* STEP 8 -> RERENDERD AND REMAPPED TO SHOW UPDATED BEACON TABLE WITH NEW ONE */}


            {b.username ?? " "}
            {b.title ?? " "} {/* the title of each individual object needs to be shown in the outputted list */}
            {b.location ?? " "} {/* location */}
            {b.intent?? " "}
            {b.date ?? " "} {/* date */}
            {b.time ?? " "} {/* time */}
            {b.lat ?? 0}&nbsp;
            {b.lng ?? 0}
            {Array.isArray(b.attendees)? b.attendees.map((att, index) => (
            <span key={index}>{att}</span>)): null}
            <button type="button" onClick={() => rsvpABeacon(username, b.id)}> {/* when we click on the rsvpABeacon pass in 'elzi' as the user we will be checking for and the beacon id for
            whichever beacon button we clicked */}

                {b.attendees.includes(username)? 'Leave' : 'RSVP'}

            </button>



            <button onClick={() =>deleteABeacon(b.id)}> 
                {/* also each list line will have a button element attached to it unlike the 
            other two these are mapped
            to each time we list off a beacon and pressing this one will run the delBeacons 
            func from usebeacons which takes the index position of whatever onj we clicked in the array was */}
                delete
            </button>
        
        </li>)} {/* inside these <li></li> is what will be shown in the list format */}


      
    </ul>
    </div>

    
            //EACH TIME THE BUTTON A BEACON IS MADE AND STORED IN THE BEACONS ARRAY AFTER BUTTON IS CLICKED THE MAP LOOPS ALL 
            //THE OBJS IN THERE INCLUDING THE OLD ONES AND GOES TO PULL OUT TITLE LOCATION DATE TIME 
            
           //when map loops it goes through each individual obj {} in the array 
           // and display the things we chain per obj ONE AT A TIME PULL SHIT OUT. 
           // until it reaches the end of the array and there is no more

)
}

export default BeaconSystem