
import { useEffect } from "react"
import { addentry, fetchjournal } from "../hooks/backendapi/Featuresapi"
import NavBar from "./Navbar"
const Journal = ({status, setStatus, user, entry, setEntry, ...feats}) => {



    const makeEntry = async() => { //this function stores the data we need to pass to backend to put in the timer 

            const today = new Date().toISOString().split('T')[0] //today box will hold current date
             const entries =  { //now all the checks are done we take the deats that were updated into the sattefuls and store it inside a timers box
    date: today,
    user_id: user.id,
      JournalEntry: entry
            }
            
            try {
                const je = await addentry(entries) //send over the timer info to put in the backend for updating
            } catch (error) {
                console.error("Supabase insert failed:", error)//if anythin goes afry put out an error
            }
    
        }
        
        useEffect(() => {

            const journalinput = async() => {
            const data = await fetchjournal()

            if (data){

            setEntry(data.JournalEntry)
            }

            }


            journalinput()
            }, [])












    return(
        <>
            <textarea value={entry} placeholder="Brain Dump Waiting..." onChange={(e) => setEntry(e.target.value)}>





            </textarea>
        <div>


        <button onClick ={() => {makeEntry()}}>Submit</button>                           
        
        </div>



        <NavBar {...feats}/>
        </>

    )


}

export default Journal