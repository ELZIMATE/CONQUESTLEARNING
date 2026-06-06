import { useEffect } from "react"
import "./Widgets.css"
import { addSOTW, fetchSOTW, } from "../hooks/backendapi/Featuresapi"



const Widgets = ({user, game, setGame, song, setSong, calories, setCalories, gameopen, setGameOpen, calsopen, setCalsOpen, songopen, setSongOpen, weekstart, setWeekStart}) => {



        useEffect(() => {
        const getchoice2 = async() => {
            const data = await fetchSOTW(weekstart) //wait for the song of the week for that weekstart date
            //data now stores the song of the week for that weekstart date and user id
        

            if (data){ //check to see if data has the info 
            setSong(data?.SOTW ?? '') //set the song to be the song of the week for that weekstart date
            } else{
                setSong(null)
            }
        }

        getchoice2(weekstart)

    }, [weekstart]) //sync the useffect to fetch song of the week for whenever we change the weekstart inpiut so we can see it for that week


         

    
return(
    <>
    
   <div style={{display: `flex`, flexDirection: 'row', height:`fit-content`,}}> 
    

<div className="preview-card">
    {songopen ? //if songopen is true show the input to change the song of the week and if not show the song of the week for that weekstart date
    <input value={song} onChange={(e) => setSong(e.target.value)}/> :
    <b>{song || `SOTW `}</b>}
    <button onClick={() => {setSongOpen(!songopen)
    addSOTW(song, weekstart, user.id)}
    }> ADD </button>
</div>



    <input value={weekstart} type='date' onChange={(e) => setWeekStart(e.target.value)}></input> {/*input for the weekstart date 
    to know which sotw to pull up and change*/}
        
        



    </div>
    
    </>

)


}

export default Widgets