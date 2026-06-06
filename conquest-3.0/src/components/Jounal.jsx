
import { useEffect } from "react"
import { addentry, fetchjournal } from "../hooks/backendapi/Featuresapi"
import NavBar from "./Navbar"

const Journal = ({ dayData, journalDate, setJournalDate, selectedDate2, setSelectedDate2, setSelectedDate, selectedDate, status, setStatus, user, entry, setEntry, ...feats}) => {


        const backday = () => { //this here is to go back in time a day when clicked
        const date = new Date(selectedDate) //we made a date storage const where here it will hold a new date object and assigning this date here to be whatever we put in the input date selector
        date.setDate(date.getDate() - 1) //this will than take away one from the date
        setSelectedDate(date.toISOString().split('T')[0]) //we set our selected date to be that date after we took away 1 
        }
        
        const fwdday = () => { //this here is to go back in time a day when clicked
        const date = new Date(selectedDate) //we made a date storage const where here it will hold a new date object and assigning this date here to be whatever we put in the input date selector
        date.setDate(date.getDate() + 1) //this will than take away one from the date
        setSelectedDate(date.toISOString().split('T')[0]) //we set our selected date to be that date after we took away 1 
        }


    const makeEntry = async() => { //this function stores the data we need to pass to backend to put in the timer 

            const today = new Date().toLocaleDateString('en-CA') //today box will hold current date
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
            try {
                const data = await fetchjournal(selectedDate)
                const journalText = data?.JournalEntry ?? ""
                setEntry(journalText || null)
                
                
            } catch (error) {
                setEntry("")
            }

            }


            journalinput()
            }, [selectedDate])










    return(
        <>
            <textarea value={entry} placeholder="Brain Dump Waiting..." onChange={(e) => setEntry(e.target.value)}>





            </textarea>
        <div>


        <button onClick ={() => {makeEntry()}}>Submit</button> 
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}></input>
        <button onClick={backday}>Previous Day</button>
        <button onClick={fwdday}>Next Day</button>

        <p>{entry}</p>                          
        
        </div>



        
        </>

    )


}
export default Journal

