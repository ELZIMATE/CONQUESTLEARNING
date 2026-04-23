import useFeatures from "../../hooks/useFeatures";

import  { Link } from 'react-router-dom'

 const JournalPrev = ({ dayData, ...feats}) => {


return(
<>

<Link to="/jounal"> Journal 
<div style={{maxHeight:'100px', overflow:'hidden'}}>
        <p>{(dayData.JournalEntry || '').slice(0,100)}</p> {/*it will now show the user date journal entry for them based on the chosen date in here which we set wth inputter and useffect b4.*/}
 </div>       
</Link>

</>

)



}


export default JournalPrev