import ProgressBar from "../ProgressBar"
import Timer from "../Timer"
import NavBar from "../Navbar"
import Journal from "../Jounal"
import TimeCard from "./TimeCard"
import useFeatures from "../../hooks/useFeatures"


const TimerScreen = ({ waketime, sleeptime, setWakeTime, setSleepTime, ...feats}) => {

    
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

    const remaining = dayhrs - (feats.workTime + feats.socialTime + feats.fitnessTime + feats.leisureTime)

    const untracked = 86400 - (feats.workTime + feats.socialTime + feats.fitnessTime + feats.leisureTime)




return(
    <>


    
    <h1>Start The clock</h1>

    <div style={{position: 'absolute', top: '20px', right: '20px', color: 'purple'}}><b>Time Remaining: </b>{formattime(untracked)}</div>
    <div style={{position: 'absolute', top: '20px', left: '20px', color: 'orange'}}><b>Time Remaining: </b>{formattime(remaining)}</div>
    <Timer {...feats} />
    <ProgressBar {...feats}/>
    <TimeCard label="Work" currentTime={feats.workTime} targetTime={30}/>
    <TimeCard label="Social" currentTime={feats.socialTime} targetTime={39000}/>
    <TimeCard label="Leisure" currentTime={feats.leisureTime} targetTime={39000}/>
    <TimeCard label="Fitness" currentTime={feats.fitnessTime} targetTime={39000}/>

    
    
    <div>

    <input value={waketime} type="time" onChange={(e) => setWakeTime(e.target.value)}></input>
    <input value={sleeptime} type="time" onChange={(e) => setSleepTime(e.target.value)}></input>
    </div>
    </>


    

)

}


export default TimerScreen
