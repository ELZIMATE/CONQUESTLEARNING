import "./Widgets.css"



const Widgets = ({game, setGame, song, setSong, calories, setCalories, gameopen, setGameOpen, calsopen, setCalsOpen, songopen, setSongOpen}) => {

    
return(
    <>
    
   <div style={{display: `flex`, flexDirection: 'row', height:`100vh`}}> 
    
<div className='btnlayout'>
    {gameopen ?
    <input value={game} onChange={(e) => setGame(e.target.value)}/> :
    <b>{game || `GOTW`}</b>}
    <button onClick={() => setGameOpen(!gameopen)
    }> ADD </button>
     
</div>

<div className="numbers">
    {songopen ?
    <input value={song} onChange={(e) => setSong(e.target.value)}/> :
    <b>{song || `SOTW `}</b>}
    <button onClick={() => setSongOpen(!songopen)
    }> ADD </button>
</div>


<div className="calories">
    {calsopen ?
    <input value={calories} onChange={(e) => setCalories(e.target.value)}/> :
    <b>{calories || `calories`}</b>}
    <button onClick={() => setCalsOpen(!calsopen)
    }> ADD </button>
 </div>
        
        
        



    </div>
    
    </>

)


}

export default Widgets