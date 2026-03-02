import chidori from "./assets/SasukeUchiha.jpg"
import activated from "./assets/Chidoriactivated.jpg"

const Chidori = () => { //1we make the box which will be storing the major function 
    const lightingblade = (event) => event.target.src = activated //2inside that is a box with the inner function taking an event paramter yet to be filled
    //6now with the event object passed in we chain target and src to input the activated src storing the new image we want shown on click


    return(<img src = {chidori} onClick ={(event) => lightingblade(event)}></img>) //3return will now take what to display

    //4this is a html image element linking the src which is chidori and holds image 
    //5when clicked it auto makes a event obj stored in event parameter and passed to lightning blade which is than sent back to the function
}

export default Chidori