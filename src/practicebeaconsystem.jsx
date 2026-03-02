//User types username 
//Click Button to rsvp/cancel
//toggle username in state
//send the update to backend
//update ui accordingly

import { useEffect, useState } from "react"
import { addAttendees, getAttendees, removeAttendees } from "./practicebeaconsystemapi"
import { supabase } from "../conquest-mvp/src/features/beacons/api/supabaseClient"



const PracticeBeaconSystem  = () => { //construct the component

    const[username, setUsername] = useState('') //create the state of the username will be altered stateful when we do setUsername() changes -> username, started as empty " " 
    const[attendees, setAttendees] = useState([]) //same for attendees but stores array started []
    const[loading, setLoading] = useState(false) //same for loading but stores boolean at false started
    const[backup, setBackup] = useState([]) //same for backup stores an array of the attendees but made to backup in case backend fails 
    const[error, setError] = useState('')
 
 
    useEffect(() => {
    const fetchAttendees = async() => {
       try {
            setLoading(true)
            const roll = await getAttendees()
            setAttendees(roll || [])
        
       } catch (error) {

        setError('failed to fetch attendees')
        
       }

            setLoading(false)

            

    }
     fetchAttendees()   }, [])

    const toggleAttendance = async() => { //4 -- now we run --->
        
        
        
        const un= username.trim().toLowerCase() //to ensure the usernames are uniquely identified we pass in the username to trim out spaces and to lowercase all of them
        if (!un) return
        const exists = attendees.includes(un)
        setBackup([...attendees]) //first the attendees inside will be stored whatever it is in backup memory
        setLoading(true) //we start by setting the loading state to be true and now it will rerender to show loading message
        //so these are not factored as different usernames but the same regardless if one is capitalised or has/doesnt have spaces.
        try {
                    if(!exists){
            const roll = await addAttendees(un)
            setAttendees(roll)
        }else{
            const roll = await removeAttendees(un)
                setAttendees(roll)
        }
                        
        } catch (error) {
            
            setError('Database fuckup')
            
        }
        setLoading(false)
        console.log(typeof error)
            console.log(attendees)

        
    }


                    
        
       ;//5 - in here runs after 0.9s 
        
        


    
    



    



    return(
        <div>
            <input value={username} onChange={(e) => setUsername(e.target.value) //1 -- first we input the username we want inside the inputs
            //the onchange will sense when we try change the input box or type and sends the contents we write to alter username to be
            //what we type stored in username now.
                
            }></input>
            <button onClick={() => toggleAttendance()} disabled = {loading}>press me</button> {/* 2 -- button here is made to sense a 
            click and run the toggle attendance, lets move and see what it does */}
            
            {loading && <p>'loading data...' </p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
            <ul>
                
                {attendees.map((a, index) => <li key={index}> {/*6 -- finally the updated attendeees array we changed by typing and adding with toggle attendance button func
                will be mapped looped through adn each individual attendee (a) item inside will be displayed */}
                    {a}
                </li>)}

                

                
            </ul>
        </div>
        
    )



}
export default PracticeBeaconSystem