import { useState } from "react"
import { addgame } from  "../allmedia"

const AddGame = (games, setGames) => {
    const [gameTitle, setGameTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [percentComplete, setPercentComplete] = useState("");
    const [hoursPlayed, setHoursPlayed] = useState("");
    const [rating, setRating] = useState("");
    
    const gamedetails = async(gametask) =>{
        gametask = {
            gameTitle: gameTitle,
            platform: platform,
            percentComplete: percentComplete,
            hoursPlayed: hoursPlayed,
            rating: rating  
        }
        const data = await addgame(gametask)
    }

        return (<>
        <input placeholder="Game Title" value={gameTitle} onChange={(e) => setGameTitle(e.target.value)}></input>
        <input placeholder="Platform" value={platform} onChange={(e) => setPlatform(e.target.value)}></input>
        <input placeholder="Percent Complete" value={percentComplete} onChange={(e) => setPercentComplete(e.target.value)}></input>
        <input placeholder="Hours Played" value={hoursPlayed} onChange={(e) => setHoursPlayed(e.target.value)}></input>
        <input placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)}></input>
        <button onClick={gamedetails}>Submit</button>

         {games.map((g, index) => {
            <>
            <li>{g.gameTitle}</li>
            <li>{g.platform}</li>
            <p>{g.percentComplete}</p>
            <p>{g.hoursPlayed}</p>
            <b>{g.rating}</b>
            </>
         })}   
        
        
        </>)

        
}
export default AddGame
