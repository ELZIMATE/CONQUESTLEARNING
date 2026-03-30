const WorkExp = ({submit, issubmit, enddate, work, role, responsibilities, workdate, setResponsibilities, setWorkDate, setRole, setWork, setEndDate }) => {





    return(
     <div>
      <label>Work Experience</label>
     {!submit && ( 
      <div>  
     <input placeholder="Job Title" value={work} onChange={e => setWork(e.target.value) }></input>
     <input placeholder="Role" value={role} onChange={e => setRole(e.target.value) }></input>
     <div>
     <input type="date" placeholder="startdate" value={workdate} onChange={e => setWorkDate(e.target.value)}></input>
     <input type="date" placeholder="end date" value={enddate} onChange={e => setEndDate(e.target.value)}></input>
     </div>
    <textarea value={responsibilities} placeholder="responsibilties" onChange={e=> setResponsibilities(e.target.value)}>
    
    </textarea>
     
     </div> 
      )}
     
        
     {submit && (
    <>
     <div>
           
        <p>Work: {work}</p>
        <p>Role: {role}</p>
        <p>Start Date: {workdate}</p>
        <p>End Date: {enddate}</p>
        <p>Responsibilities:{responsibilities}</p>
    </div>
    
    

    

    </>   
     )}
    
   </div>
     
)

}

export default WorkExp


