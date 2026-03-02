import { useState } from "react"

const Status = () => {
    
    const[train, startTraining] = useState("Resting")



return(<div><button onClick = {() => {
    if (train === "Resting")
    startTraining('Training')
else{
    startTraining('Resting')
}
}}>TRAIN</button>
<p>{train}</p></div>)



}



export default Status