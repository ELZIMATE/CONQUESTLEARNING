import { useEffect } from "react"
import "./Widgets.css"
import { addSOTW, fetchSOTW, } from "../hooks/backendapi/Featuresapi"



const Widgets = ({user, game, setGame, song, setSong, calories, setCalories, gameopen, setGameOpen, calsopen, setCalsOpen, songopen, setSongOpen, weekstart, setWeekStart}) => {



        useEffect(() => {
        const getchoice2 = async() => {
            const data = await fetchSOTW(weekstart)
        

            if (data){
            setSong(data?.SOTW ?? '')
            } else{
                setSong(null)
            }
        }

        getchoice2(weekstart)

    }, [weekstart])


         

    
return(
    <>
    
   <div style={{display: `flex`, flexDirection: 'row', height:`100vh`}}> 
    

<div className="numbers">
    {songopen ?
    <input value={song} onChange={(e) => setSong(e.target.value)}/> :
    <b>{song || `SOTW `}</b>}
    <button onClick={() => {setSongOpen(!songopen)
    addSOTW(song, weekstart, user.id)}
    }> ADD </button>
</div>



    <input value={weekstart} type='date' onChange={(e) => setWeekStart(e.target.value)}></input>
        
        



    </div>
    
    </>

)


}

export default Widgets