
import { useState } from "react"
import part1 from "./assets/NarutovsSasukeOG.jpg"
import shippuden from "./assets/NarutovsSasukeShippuden.jpg"



const NarutovsSasuke = () => {

    const[fightimage, changeFight] = useState(part1)


    const NvS = () => {
        changeFight(shippuden)
    }
return(    <div>
        <img src={fightimage}></img>
        <button onClick={NvS}>FIGHT</button>
    </div>)


}

export default NarutovsSasuke