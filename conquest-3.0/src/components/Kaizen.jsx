import { useState, useEffect } from "react"
import useFeatures from "../hooks/useFeatures"
import { addKaizen } from "../hooks/backendapi/Featuresapi"
import { fetchKaizen } from "../hooks/backendapi/Featuresapi"


const Kaizen = ({user, date, selectedDate, kaizenopen, setKaizenOpen, kaizen, setKaizen, ...feats}) => {

    useEffect(() => {
            const getkaizen = async() => {
                const date = selectedDate || new Date().toLocaleDateString('en-CA')
                const data = await fetchKaizen(selectedDate, user.id) //wait for the kaizen for that date and user id
                //data now stores the kaizen for that date and user id
            
    
                if (data){
                setKaizen(data?.kaizen ?? '')   
                } else{
                    setKaizen(null)
                }
            }
    
            getkaizen(selectedDate, user.id)
    
        }, [selectedDate, user.id]) //sync the useeffect to fetch kaizen for whenever we change the date inpiut so we can see it for that date
    




    

return(
    <>
    <div className="preview-card">
    {kaizenopen ? 
        <input value={kaizen} onChange={(e) => {setKaizen(e.target.value)}}/> :
        <b>{kaizen || `Kaizen`}</b>}
        <button onClick={() => {setKaizenOpen(!kaizenopen)
        addKaizen(kaizen, selectedDate, user.id)
        } }> 1% BETTER </button>  
    

    </div>
    </>

    
)

}
export default Kaizen