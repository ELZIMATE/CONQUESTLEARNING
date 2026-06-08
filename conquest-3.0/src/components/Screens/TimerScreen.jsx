import ProgressBar from "../ProgressBar"
import Timer from "../Timer"
import NavBar from "../Navbar"
import Journal from "../Jounal"
import TimeCard from "./TimeCard"
import useFeatures from "../../hooks/useFeatures"
import ClockSetter from "./ClockSetter" 
import { addtimer } from "../../hooks/backendapi/Featuresapi"


const TimerScreen = ({clockset, setClockSet, setWakeTime, setSleepTime, openwake, setOpenWake, openSleep, setOpenSleep, workTime, sleeptime, waketime, setWorkTime, socialTime, setSocialTime, leisureTime, setLeisureTime, fitnessTime, setFitnessTime, isRunning, running, category, setCategory, user, entry, ...feats}) => {

    
const formattime = (seconds) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60

        return `${String(hrs).padStart(2, `0`)} : ${String(mins).padStart(2,`0`)} : ${String(secs).padStart(2, `0`)}`

    
    }

    const [wakeHrs, wakeMins] = (waketime || '00:00').split(`:`)
    const [sleepHrs, sleepMins] = (sleeptime || '00:00').split(`:`)

    const wakeSeconds = (Number(wakeHrs) * 3600) + (Number(wakeMins) * 60)

    const sleepSeconds = (Number(sleepHrs) * 3600) + (Number(sleepMins) * 60)


    const dayhrs = wakeSeconds - sleepSeconds

    const remaining = dayhrs - (workTime + socialTime + fitnessTime + leisureTime)

    const untracked = 86400 - (workTime + socialTime + fitnessTime + leisureTime)




return(
    <>


    
    <h1>Start The clock</h1>

        <div>
        {openwake ?
         <input value={waketime} type="time" onChange={(e) => setWakeTime(e.target.value)}></input> :
         <b>{`Wake Time: ${waketime || `00:00`}`}</b>}
            <button onClick={() => setOpenWake(!openwake)}> Set Wake Time </button>
        {openSleep ?
         <input value={sleeptime} type="time" onChange={(e) => setSleepTime(e.target.value)}></input> :
         <b>{`Sleep Time: ${sleeptime || `00:00`}`}</b>}
            <button onClick={() => setOpenSleep(!openSleep)}> Set Sleep Time </button>
    </div>
<button onClick={() => setClockSet(true)}>Add Timer</button>
    {clockset &&
        <ClockSetter setClockSet={setClockSet}
        workTime={workTime} socialTime={socialTime} leisureTime={leisureTime} fitnessTime={fitnessTime}
        isRunning={isRunning} running={running} category={category} setCategory={setCategory}
        user={user} entry={entry} addtimer={addtimer} setWorkTime={setWorkTime} setSocialTime={setSocialTime} 
        setLeisureTime={setLeisureTime} setFitnessTime={setFitnessTime}
        />} {/* if clockset is true then pop up the clock setter component which is where we can set the timer and stuff and then pass the setClockSet setter to it so that way we can change the clockset value from there and make it disappear when we are done setting */}


    <div style={{position: 'absolute', top: '20px', right: '20px', color: 'purple'}}><b>Time Remaining: </b>{formattime(untracked)}</div>
    <div style={{position: 'absolute', top: '20px', left: '20px', color: 'orange'}}><b>Time Remaining: </b>{formattime(remaining)}</div>
    <ProgressBar workTime={workTime} socialTime={socialTime} fitnessTime={fitnessTime} leisureTime={leisureTime}/>
    <TimeCard label="Work" currentTime={workTime} targetTime={30}/>
    <TimeCard label="Social" currentTime={socialTime} targetTime={39000}/>
    <TimeCard label="Leisure" currentTime={leisureTime} targetTime={39000}/>
    <TimeCard label="Fitness" currentTime={fitnessTime} targetTime={39000}/>

    
    

    </>


    

)

}


export default TimerScreen
