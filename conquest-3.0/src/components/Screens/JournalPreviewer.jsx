import useFeatures from "../../hooks/useFeatures";

import  { Link } from 'react-router-dom'

 const JournalPrev = ({ dayData, ...feats}) => {


return(
<>
<div className = 'preview-card'>
        <h3 style={{color: 'rgb(179, 139, 69)', marginBottom: '8px', letterSpacing: '2px'}}>JOURNAL</h3>
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