import { useState } from 'react';


const VideoGameTrack = () => {
    
    const [gameTitle, setGameTitle] = useState("");


    const gamedetails = {
    }
    
return (
    <div>
        <h1>Video Game Track</h1>

        <input value={gameTitle} onChange={(e) => setGameTitle(e.target.value)}></input>


        <button onClick={() => alert(`You entered: ${gameTitle}`)}>Submit</button>
        
    </div>
)   
}

export default VideoGameTrack;