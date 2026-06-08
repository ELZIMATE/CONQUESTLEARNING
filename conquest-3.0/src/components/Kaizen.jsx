import { useState, useEffect } from "react"
import useFeatures from "../hooks/useFeatures"
import { addKaizen } from "../hooks/backendapi/Featuresapi"
import { fetchKaizen } from "../hooks/backendapi/Featuresapi"


const Kaizen = ({user, date, selectedDate, kaizenopen, setKaizenOpen, kaizen, setKaizen, ...feats}) => {

    useEffect(() => { //sync kaizen so that way when the data changes it will get the kaizen for that date
            const getkaizen = async() => { //runs when selected date changes to get the kaizen for that date and user id
                const date = selectedDate || new Date().toLocaleDateString('en-CA') //if selected date is null then we just use the current date
                const data = await fetchKaizen(selectedDate) //wait for the kaizen for that date and user id
                //data now stores the kaizen for that date and user id
            
    
                if (data){
                setKaizen(data?.kaizen?? '')   
                } else{
                    setKaizen(null)
                }
            }
    
            getkaizen(selectedDate, user.id)
    
        }, [selectedDate, user.id]) //sync the useeffect to fetch kaizen for whenever we change the date inpiut so we can see it for that date
    




    

return(
    <>
    <div className="preview-card">
    {kaizenopen ? //check if the kaizen button is set as true first  
        <input value={kaizen} onChange={(e) => {setKaizen(e.target.value)}}/> : //pop up an input section if it is 
        <b>{kaizen || `kaizen`}</b>} //display the kaizen for that day if there is one and if not just say kaizen
        <button onClick={() => {setKaizenOpen(!kaizenopen) //toggle the kaizen input on and off with the button
        addKaizen(kaizen, selectedDate, user.id) //when we click the button to add the kaizen it will send the kaizen, date, and user id to the backend to be stored in the database 
        // and updated if there is already a kaizen for that date and user id
        } }> 1% BETTER </button>  
    

    </div>
    </>

    
)

}
export default Kaizen