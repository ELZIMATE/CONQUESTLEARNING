import { useState } from "react"

const Education = ({study, school, studydate, setSchool, setStudyDate,  setStudy, issubmit, submit}) => {




    
    



return(
     <div>
      <label>Educational History</label>
      {!submit && (
      <div>
      
      
     <input placeholder="Name of School" value={school} onChange={(e) => setSchool(e.target.value)}></input>
     <input placeholder="Date of Study" type="date" value={studydate} onChange={(e) => setStudyDate(e.target.value)}></input>
     <input placeholder="Qualiications"  value={study} onChange={(e) => setStudy(e.target.value)}></input>
     </div>
      )}
     
        
     {submit && (
     <div>   
        <p>High School{school}</p>
        <p>Date of Study: {studydate}</p>
        <p>Qualification: {study}</p>
    </div>    
     )}
   </div>
     
)


}


export default Education