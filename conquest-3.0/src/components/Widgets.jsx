import { useEffect } from "react"
import "./Widgets.css"
import { fetchCalories, addCalories, addSOTW, fetchSOTW, addGOTW, fetchGOTW } from "../hooks/backendapi/Featuresapi"



const Widgets = ({user, game, setGame, song, setSong, calories, setCalories, gameopen, setGameOpen, calsopen, setCalsOpen, songopen, setSongOpen, weekstart, setWeekStart}) => {


    useEffect(() => {
        const getchoice = async() => {
            const data = await fetchGOTW(weekstart)
            console.log(data?.GOTW ?? '')

            if (data){
            setGame(data?.GOTW ?? '')
            } else{
                setGame(null)
            }
        }

        getchoice(weekstart)

    }, [weekstart])


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


            useEffect(() => {
        const getchoice3 = async() => {
            const data = await fetchCalories(weekstart)
        

            if (data){
            setCalories(data?.calories ?? '')
            } else{
                setCalories(null)
            }
        }

        getchoice3(weekstart)

    }, [weekstart])




    
return(
    <>
    
   <div style={{display: `flex`, flexDirection: 'row', height:`100vh`}}> 
    
<div className='btnlayout'>
    {gameopen ?
    <input value={game} onChange={(e) => setGame(e.target.value)}/> :
    <b>{game || `GOTW`}</b>}
    <button onClick={() => {setGameOpen(!gameopen)
    addGOTW(game, weekstart, user.id)
    }}> ADD </button>
     
</div>

<div className="numbers">
    {songopen ?
    <input value={song} onChange={(e) => setSong(e.target.value)}/> :
    <b>{song || `SOTW `}</b>}
    <button onClick={() => {setSongOpen(!songopen)
    addSOTW(song, weekstart, user.id)}
    }> ADD </button>
</div>


<div className="calories">
    {calsopen ?
    <input value={calories} onChange={(e) => setCalories(e.target.value)}/> :
    <b>{calories || `calories`}</b>}
    <button onClick={() => {setCalsOpen(!calsopen)
    addCalories(calories, weekstart, user.id)}}> ADD </button>
 </div>
        

    <input value={weekstart} type='date' onChange={(e) => setWeekStart(e.target.value)}></input>
        
        



    </div>
    
    </>

)


}

export default Widgets