import BeaconMap from "./features/beacons/components/BeaconMap";
import { useState } from "react";
import BeaconSystem from "./features/beacons/components/BeaconSystem"
import 'leaflet/dist/leaflet.css';
import useBeacons from "./features/beacons/hooks/useBeacons";



function App() {

  const beaconState = useBeacons() //calls in all the functions which are storein the useBeacons.js storage hooks file and it will make a global state for them and pass down to other components with props.
  //basically, beacons, error, loading and the functions are ran and passed down from here.


  const[selectedLat, setSelectedLat] = useState(null) //makes setter and stateful local here to take lat and lng and pass down with props to others that need it 
  const[selectedLng, setSelectedLng] = useState(null)

    const login = localStorage.getItem('username') //make the login variable which holds the local storage username item, open draw get username put it in login const
    const [username, setUsername] = useState(login || "") //so inside username state start as login if login is null empty start empty string

    


  

  

  return (
    <>
    <BeaconSystem  {...beaconState} setUsername = {setUsername} username ={username} //copy and pass all the hooks inside the useBeacons.js (stored under name of BeaconState const), to be usable or referenced in Beacon system
    //the states and functions as props to be referenced in params and used...
                   selectedLat={selectedLat}//latlng value passed to be used 
         selectedLng={selectedLng} /> 
    <BeaconMap beacons = {beaconState.beacons} setSelectedLat={setSelectedLat} setSelectedLng={setSelectedLng} selectedLat = {selectedLat} selectedLng = {selectedLng} /> {/* sending in lat/lng setters to be used and states*/}


    </> //here we are only passing the beacons array state form there we chain it so it only pulls that coz we only need that for reference
  )
}

export default App

//ON OPENING THE APP:
//1 - the first thing that happens when app is opened is the app func runs and builds beaconsystem and beaconmap blueprint it mounts it on screen with null values as props havent been modified
// to make rerender.
//2 - now it is mounted the fetch beacons function ran from here is auto programmed with useeffect to go 'holy shit run fetch beacons now something is mounted'
//3 - fetch beacons setLoading to show loading message rerender in here than inside the BeaconSystem and pauses the whole function to go to back end 'hey backend give me the beacontable'
//it gets it under the data name and passes it to setbeacons to put inside beaxons array loading is now false. 
//4 - on rerender beacons is mapped to visibly show an empty boxes lol.

//ON ADDING BEACON
//5 - now when we type the input sensors when the value is changed 'ohhh shit this value in the box is changing' now makes event obj about what is changed typed or altered,
//passes to setter the change the stateful local value of title, name, date, location inside beaconsystem only so now they are holding what is typed.

//INSIDE THE MAPPER happening on clicking the map and hovering over...
//6 - Inside the map zone we click the map the event object is made from the mouseclick leaflet grabs lat and lng values from the event and puts them inside the setterlat lng to, 
//which we passed with props to from app.jsx to use in here are sent back into app.jsx altering the stateful there rerender the whole BeaconSYSTEM but not the other details,
//why? becuase it is stored in memory statefuls and rerender doesnt touch this but now the beacon ibj has lat lng of where is clicked.
//7 - another use map events takes mousemove for when the mouse is moved to activate the sethoverlat setter for stateful hoverlat/lng locally inside the beacon map as it is
//as only the map really gives a shit about updating and actively tracking the lat and lng for where the hovered obj is. BEACON system doesnt need to show the hover lat lng.
//8. - now to get marker to stop moving and place itself inside the confines of the map container, selectedalat lng from global state is taken to be referenced here.
// first it checks has it got a value isnside ie: has the button been clicked and if it has take where it was clicked and show a marker obj component from leaflet
//9 - now to actively track hovering marker it does the same but locally with the hover stateful and setter it takes the hover stateful and checks with js ternary. 
//are we hovering over the map whatever stateful value is lat.lng hovering over map show a marker leaflet component on that spot.
//ON ADDING BEACON 
//10 - button is clicked and it runs beaconmaker packages into a beacon with all that info. Ships it off using addNewBeacon hook.
//11 - this function shows loading to be true rererenders and doesnt touch states or interrupt await 
// and than beacon is sent to backend (hooks paused await) api zone supabase adds to table now it has a beacon
//12 - delivers updated table back we renamed it allBeacons but that dont really matter. hooks resumes.
//13 - setBeacons takes new table, alters globally the array. Loading is now stopped.
//14 - the beacons arrray is mapped to show the details of the updated array inside beacon system it displays the title, location and other details in writing as ul
//15 - rerender inside beacon system initially will check to make sure the lat and lng of the beacons has a value and detects the beacon id for each one proceeding to, 
//rewrite each marker of each beacon that was stored inside the beacons array upon update and rerender.
