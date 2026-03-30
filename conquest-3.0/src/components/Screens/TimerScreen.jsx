import ProgressBar from "../ProgressBar"
import Timer from "../Timer"
import NavBar from "../Navbar"
import Journal from "../Jounal"


const TimerScreen = ({...feats}) => {

return(
    <>
    <h1>Start The clock</h1>
    <Timer {...feats} />
    <ProgressBar {...feats}/>
    <div>
    <NavBar {...feats}/>
    </div>
    </>


    

)

}


export default TimerScreen
