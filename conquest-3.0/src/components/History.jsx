import { useEffect } from "react"
import { fetchtimer } from "../hooks/backendapi/Featuresapi"
import useFeatures from "../hooks/useFeatures"
import NavBar from "./Navbar"
import Journal from "./Jounal"
import ProgressBar from "./ProgressBar"


const History = ({ setSelectedDate, selectedDate, dayData, setDayData, ...feats}) => { //creation of the history component function which will make the history section for the app


    const backaday = () => { //this here is to go back in time a day when clicked
        const date = new Date(selectedDate) //we made a date storage const where here it will hold a new date object and assigning this date here to be whatever we put in the input date selector
        date.setDate(date.getDate() - 1) //this will than take away one from the date
        setSelectedDate(date.toISOString().split('T')[0]) //we set our selected date to be that date after we took away 1 

    }

    const frwdaday = () => {
        const date = new Date(selectedDate)
        date.setDate(date.getDate() + 1)
        setSelectedDate(date.toISOString().split('T')[0])

    }



useEffect(() => { //synchoronisarion 
const datechange = async() => {
    const data = await fetchtimer(selectedDate) //go into fetch timer with whatever the selected date is
//now data has an object which holds the date and the user id for the timer who it belongs to
    if (data) setDayData(data) //if data has shit in it aka if a date is chosen to set it off 
}

datechange() //change it to the day


}, [selectedDate]) //everytime selected date inputter is changed

//the useeffect works in this, everytime we change the selcted date with the input it goes into fetch timer gets the date and userid of who changed it and what they changed to and stores in datdaya stateufl 
        
    


return(
    <>

    <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}></input> {/*0 we set the input to the date we want, e obj delivers to change state*/} 


    {dayData && (<div> // {/*the day data here is now holding the changed date the user id for their backlog of the info*/}

        <ProgressBar
        
        workTime={dayData.workTime}
        socialTime={dayData.socialTime}
        fitnessTime={dayData.fitnessTime}
        leisureTime={dayData.leisureTime}/>


        <p>{dayData.JournalEntry}</p> {/*it will now show the user date journal entry for them based on the chosen date in here which we set wth inputter and useffect b4.*/}

    
    </div>)}

    <button onClick={frwdaday}> NEXT </button>
    <button onClick={backaday}> BACK </button>



    <NavBar/>
    </>

)



}
export default History