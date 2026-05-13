import { useState } from "react"
import useFeatures from "../hooks/useFeatures"


const Kaizen = ({user, selectedDate, kaizen, setKaizen, ...feats}) => {




    const createKaizen = async() => {
        const today = selectedDate || new Date().toLocaleDateString('en-CA')
        const kaizenobj = {
            date: today,
            user_id: user.id, 
            kaizen: kaizen,

        }
        const data = await addKaizen(kaizenobj)
    }

return(
    <>
    <input value={kaizen} onChange={(e) => {setKaizen(e.target.value)}}></input>
    <button onClick={createKaizen()}></button>

    <p>{data.kaizen}</p>
    </>
)
}