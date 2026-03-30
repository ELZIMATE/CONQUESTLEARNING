import { useEffect, useState } from "react"
import { addtimer } from "../hooks/backendapi/Featuresapi"

const Timer = ({workTime, setWorkTime, socialTime, setSocialTime, leisureTime, setLeisureTime, fitnessTime, setFitnessTime, isRunning, running, category, setCategory, user, entry }) => { //timer function/component is starting up with hooks from useFeats imported
const [saveError, setSaveError] = useState("") //we have a error state here which only the timer is using

const formattime = (seconds) => { //we make a formatter function which runs to covert ms to hrs, s min
    const hrs = Math.floor(seconds/3600) //hrs is converted 
    const mins = Math.floor((seconds % 3600) / 60)//mins converted
    const secs = seconds % 60 //secs all converted using appropriate mathematics

    return `${String(hrs).padStart(2, `0`)} : ${String(mins).padStart(2,`0`)} : ${String(secs).padStart(2, `0`)}` //when this is ran please go on and retun back convert the nums to text string
    // first do hrs in string form nad use padstart chained to it to make it  a 2 digit number and start it at 0.
}


useEffect(() => { //syncronised with the dependancies below in the box (1)
    if (!running) return //check first if nothing is running aka if timer is set off with button trigger if it isnt running than just return back dont do anything


    const lookup = { //otherwise the moment dependies change make a lookup box where it holds each setter under titles of woek, social, leisure, fitness this is just an object storing a bunch of setter in new names
        
        work: setWorkTime, 
        social: setSocialTime,
        leisure: setLeisureTime,
        fitness:setFitnessTime 
    }

    const look = lookup[category] //make another const box look will take the lookup obj search each string and match which one is in allignment with its appropriate category.
    
     

        const interval = setInterval (() => {look( count => count + 1 )}, 1000) //after matched an interval box will store a setInterval where each second the setters will be searched and matched and with that setter a counter will add 1 to it
    
        
    return() => clearInterval(interval) //if running dependancies changes or component timer unmounts kil the interval and stop the clock. This here is in charge of actually stopping this shit otherwise the timer values would stack or continually increment each time we change the dependancies.
    

    

    

    }, [running, category]) //if the category or button trigger is clicked again this useEffect will rerun that shit again.


    const timerdata = async() => { //this function stores the data we need to pass to backend to put in the timer 
        setSaveError("")

        if (!user?.id) { //if a user id is not made and stored 
            setSaveError("You are not logged in with an active session. Log in again before saving.") //show the save error message that there isnt anytrhing
            return //return that back into the saveError for displaying.
        }

        const today = new Date().toISOString().split('T')[0] //today box will hold current date
         const timers =  { //now all the checks are done we take the deats that were updated into the sattefuls and store it inside a timers box
date: today,
user_id: user.id,
  JournalEntry: entry?.trim() ? [entry.trim()] : [],
  WorkTime: workTime,
  FitnessTime: fitnessTime,
  SocialTime: socialTime,
  LeisureTime: leisureTime
        }
        
        try {
            await addtimer(timers) //send over the timer info to put in the backend for updating
        } catch (error) {
            console.error("Supabase insert failed:", error)//if anythin goes afry put out an error
            setSaveError(error.message)//and error message
        }

    }






return(
    <>
    <p>{formattime(workTime)}</p>
    <p>{formattime(leisureTime)}</p>
    <p>{formattime(fitnessTime)}</p>
    <p>{formattime(socialTime)}</p>

    <button onClick ={() => { //the button here is the setter the moment it is clicked
        isRunning(!running) //it changes the running value to the opposite of whatever it was before aka start stop which in turn sets the useffect off above (1)
        if (running) timerdata()}}>{running? 'Stop' : 'Start'}</button> {/* if running is true and shit is running time to start timerdata func; and if running is true diplay start, if false disp stop*/}
    <select value={category} onChange={(e) => setCategory(e.target.value)}> {/* when we use the selector it will auto change the category stateful and make the value inside category be whatever is chosen which as we know the lookup will auto match to sync the timer to run with accoring */}
        <option value="work">Work</option>
        <option value="social">Social</option>
        <option value="fitness">Fitness</option>
        <option value="leisure">Leisure</option>
    </select>
    {saveError && <p>{saveError}</p>} {/* this here just displays the saveError that is caught by the setSaveError thing */}


    </>
)

}


export default Timer
