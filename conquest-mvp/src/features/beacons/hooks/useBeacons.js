import { useEffect, useState } from "react"
import { loader, addBeacon, deleteBeacon, clearBeacons, rsvpBeacons} from '../api/Beaconapi.js'
import BeaconMap from "../components/BeaconMap.jsx"


const useBeacons = () => { //starts the initial function to use a beacon we are calling it hook because it hooks in and starts the system
    const[beacons, setBeacon] = useState([])//creating a stateful variable of beacons 
    const [loading, setLoading] = useState(false)
    const[error, setError] = useState(null)
    

    // and a setter of setBeacon which changes the Beacons stateful 
    // 1111 - THIS IS THE MAIN STATE ONLY UPDATES HERE CAN RERENDER THE FRONT END.
//This first part here the beacon storage unit: Pt 1- Storage area -> Store the info

useEffect(() => { //when something initial mounts in the ui, do the following

const fetchBeacons = async() => { //build the async fetch beacons func
    try {//try this and look for errors incase
        setLoading(true) //make the loading state using setter true
        const data = await loader() //await loader -> pause all the shit going
        //  on inside the func fetch beacons wait for loader to do its shit in the api backend 
        //and store the result of the loader from the backend here loading 
        // func when done which is the supabase returned I think...
        setBeacon(data) //update the beacon to be that data of the current beacon supabase table
    } catch (error) { //if loader fucks up catch the error that fucked it error auto made by js
        setError(error.message) //use error state setter to make error stateful now whatever the error message was
    }finally{
        setLoading(false) //loading is falsified and stopped.
    }
}
fetchBeacons()//fetch beacons is set to run first immediately on the mount as indicated ()




}, [])//on initial mount []
{/*STEP 4 NOW IT IS HERE THE BEACON IS IN THE ADDNEWBEACON ADN RAN */}

const rsvpABeacon = async(username, beaconID) => {
    
    setLoading(true) //Loading is set to run, rerender inside beaconsystem.jsx 
    try {
        const updatedbeacon = beacons.find(b => b.id === beaconID)  //make a box called updated beacon with find() it will search
        //inside the beacons stateful all the beacons for the beacon which id matches the one when we clicked was passed in.
        const attendees = updatedbeacon.attendees //once found inside that beacon we will chain the attendees section store inside const attendees
        //for other references.
        console.log(updatedbeacon)
console.log(updatedbeacon.attendees)
console.log(typeof updatedbeacon.attendees)
    // and maps it loop through checking each individual beacon in there to see which id of the beacon was the clicked one.
    //when we click the button the b.id from the old array is passed here under BeaconID param we are making sure they match and that is the one clicked
    //was the one rsvpABeacon recieved and if it is correct...
         const going = attendees.includes(username) 
         
         const updatedattendees = going? 
         attendees.filter(a => a !== username) //get that obj and copy the old attendes check
            //is elzi already apart of this old attendees updated beacon list if he is filter out each attendee who is not Elzi 
            : [...attendees, username] //if he isnt go on and add him

            const update = await rsvpBeacons(updatedattendees, beaconID) //pause the function wait for this inside the backend to finish rsvp
            //Beacons takes in the updated attendees array and the beaconID of the object it belongs to.
            //goes into supabase backend table updates the attendees section there to hold updated attendees changed array and gives back the
            //whole table with whichever beacon based on beaconid had its attendees array altered.

            const updatedRow = Array.isArray(update) ? update[0] : update //make a const updatedRow which checks to make sure updated
            //value that returned from backend is holding a full array, now if it is only grab the first item as the one we want
            //otherwise it isnt than I guess keep it as it is
            

setBeacon(prev => prev.map(b => b.id === beaconID? updatedRow : b)) //use setBeacon now setter and get the previous updated array of beacons in there 
//with map loop the whole beacons array and find which beaconid was the one that was passed in when we clicked the button and change 
//that whole row or object to be updated with the altered attendees.
        
    } catch (error) {
        setError(error.message)

        
    }finally{
        setLoading(false)
    }


    
}



const addNewBeacon = async (beacon) => {
    {/*STEP 4 SETLOADING SETTER IS RAN TRIGGERED STATE
         CHANGE TO LOADING STATEFUL IN REACT TO BE TRUE SO WHOLE BEACONS IS RERENDERD
        RERAN AND THE LOADING MESSAGE SHOWN*/}
try {//try this and look for errors incase
    setLoading(true) //the beacon system front end since it imported these states will sense when the any setter changes a stateful it will rerender
    //run whole function again and change it so Loading is true and in return spot now the condition matches and loading messsage shows
    {/*STEP 5 THE BEACON IS NOW PASSED TO THE BACKEND DATA ZONE AND NOW THIS FUNCTION 
        ADDNEWBEACON IS PUT ON HOLD TO GET DATA AND WILL STORE IN UPDATED CONST BOX*/}
        const updated = await addBeacon(beacon) //beacon is passed into addbeacon we now jump into api backend and it runs that func pause this shit
        //STEPP 7 - ALL BEACONS RETURNED UPDATED NOW IS HOLDING THE RESULT OF THE BACKEND ADD BEACON
        //WHICH IS TABLE WITH ADDED OBJ
        setBeacon(updated) 
        console.log(updated.length)
        //by here updated is now storing the beacon in the BeaconMemory updated state
        //STEP 8 - USE THE SET BEACON SETTER TO CHANGE THE STATE TO THE UPDATED TABLE WITH THE NEW BEACON IN
        //SET BEACON SETTER IS USED ADN BEACONS IS CHANGED INSDIE THE BEACON SYSTEM TRIGGERRING THE RERENDER AND NOW THE LIST
        } catch (error) { //if loader fucks up catch the error that fucked it error auto made by js
        setError(error.message) //use error state setter to make error stateful now whatever the error message was
        }finally{
        setLoading(false) //loading is falsified and stopped. //STEP 8 - STOP THE LOADING AND NOW IT RERENDER AND REMAPS TO DISPLAY THE UPDATED BEACONS STATEFUL.


    }
}


const deleteABeacon = async (id) => {
    try {
        setLoading(true)
        const updated = await deleteBeacon(id)
        setBeacon(updated)
    } catch (error){
        setError(error.message)
        }finally{
        setLoading(false)
        
    }
    
    


}

const clearABeacon = async() => {
    try {
        setLoading(true)
        const updated = await clearBeacons()
        setBeacon(updated)
    } catch (error) {
        setError(error.message)
    }finally{
        setLoading(false)
    }
}



//This is part 4 here is the beacon clearance unit: Pt 4 -> clear all info



 //stores and sends back the tools
return{ rsvpABeacon, addNewBeacon, deleteABeacon, clearABeacon, beacons, loading, error} 

//beacons - variable list of beacons
//delBeacons - func to del info
//addBeacons - func to add info 
//clearBeacons - function to clear all info
}

export default useBeacons