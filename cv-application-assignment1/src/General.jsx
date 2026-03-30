import { useState } from "react"
import "./resume.css"

const GeneralInfo = ({name, email, phone, setEmail, setName, setPhone, issubmit, submit}) => {
  





    
    



return(
     <form>
      <label>General Information</label>
     {!submit && ( 
      <div>  
     <input placeholder="Name" value={name} onChange={e => setName(e.target.value) }></input>
     <input placeholder="email" value={email} onChange={e => setEmail(e.target.value) }></input>
     <input placeholder="phone" value={phone} onChange={e => setPhone(e.target.value)}></input>
     </div> 
      )}
     
        
     {submit && (
     <div>   
        <p className="name">Name: {name}</p>
        <p className="ph">Phone: {phone}</p>
        <p className="email">Email: {email}</p>
    </div>    
     )}
   </form>
     
)

}

export default GeneralInfo