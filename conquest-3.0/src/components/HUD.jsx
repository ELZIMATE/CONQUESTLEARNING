import '../App.css'
import Journal from './Jounal'
import ProgressBar from './ProgressBar'
import Timer from './Timer'
import ToDoList from './ToDoList'
import Widgets from './Widgets'
import { fetchtimer } from '../hooks/backendapi/Featuresapi'
import "./AppPalate.css"
import { useEffect } from 'react'

import NavBar from './Navbar'
import JournalPrev from './Screens/JournalPreviewer'

const HUD = ({setSelectedDate, selectedDate, dayData, setDayData, ...feats}) => {

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
    try {
        const data = await fetchtimer(selectedDate) //go into fetch timer with whatever the selected date is
//now data has an object which holds the date and the user id for the timer who it belongs to
        setDayData(data ?? null) //clear the screen when that day has no saved row
    } catch (error) {
        console.error("Failed to fetch history data:", error)
        setDayData(null)
    }
}

datechange() //change it to the day


}, [selectedDate]) //everytime selected date inputter is changed

//the useeffect works in this, everytime we change the selcted date with the input it goes into fetch timer gets the date and userid of who changed it and what they changed to and stores in datdaya stateufl 
        
    









  return (
    
    <>


  
<div className='hud-container' >  
    

      <NavBar {...feats}/>

<div className='hud-content'>

    
    <div className='hud-authdetails'>

           
          <img src="\src\assets\headshotprofile.JPG"  alt="Description of the image" style={{width:`100px`, height: `100px`}}/>
          <h2>Elias</h2>
    </div>

    <div style={{display:`flex`, flexDirection:`row`, alignItems: `center`}}>

        <button onClick={frwdaday}> NEXT </button>
        <button onClick={backaday}> BACK </button>
    </div>





          <div style={{display:`flex`, flexDirection:`row`, alignItems:`flex-start`}}>

            




    
    <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}></input> {/*0 we set the input to the date we want, e obj delivers to change state*/} 


    {dayData && (<div style={{display: `flex`, flexDirection:`column`, alignItems:`center`}}> {/*the day data here is now holding the changed date the user id for their backlog of the info*/}

        

        <ProgressBar {...feats}

        
        workTime={dayData.WorkTime ?? dayData.workTime ?? 0}
        socialTime={dayData.SocialTime ?? dayData.socialTime ?? 0}
        fitnessTime={dayData.FitnessTime ?? dayData.fitnessTime ?? 0}
        leisureTime={dayData.LeisureTime ?? dayData.leisureTime ?? 0}/>


<div style={{maxHeight: '100px', overflow:'hidden'}}>
    {(dayData.ToDos || []).sort((a,b) => a.priority - b.priority).slice(0, 3).map((t, index) => (<li key={index}> {/* the day data array is being looped and we are checking if there 
    is an array inside and if there is it will sort out each of them by priority and use slice to slice out 0 - 3 */}
        
            {typeof t === 'string' ? t : t.task} {t.priority} {/* check the type of each individual t element we loop and if it is a string than just put is as is otherwise if t is obj just show t.task */}
        </li>
    ))}
</div>

<JournalPrev dayData={dayData}/>
    
    </div>)}

    </div>

    <div style={{display:`flex`, flexDirection:`column`, alignItems:`flex-end`}}>
          
          <Widgets {...feats} />


        </div>\



        
</div>
          



          












      </div>

      



    

       
          

    



    </>
  
  )
}

export default HUD
