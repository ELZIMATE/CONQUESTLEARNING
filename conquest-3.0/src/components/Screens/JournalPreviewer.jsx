import useFeatures from "../../hooks/useFeatures";

import  { Link } from 'react-router-dom'

 const JournalPrev = ({ dayData, ...feats}) => {


return(
<>
<div className = 'preview-card'>
<Link to="/jounal"> 
<div style={{maxHeight:'100px', overflow:'hidden'}}>
        <p> VIEW Journal</p>
 </div>       
</Link>
</div>
</>

)



}


export default JournalPrev