import { useState } from "react" //import and store the useState Library
import normal from "./assets/narutostandard.jpg" //import and store the images normal and .... 
import senjutsu from "./assets/sagemode.jpg"//senjutsu



const Sagemode = () => { //this will be the piece of code or function title we export

    const[mode, Changemode] = useState(normal) //we destucutre and create out mode stateful variable which will be controlled by the Changemode setter
    //when changemode runs the mode is updated and changed based on what is passed within it
    const sm = (event) => {//this sm function is going to respond to a click event and will take an event object inside it
        Changemode(event.target.src = senjutsu) //the sm function when we click it calls changemode setter and that accesses the passed in event info  and makes the image zone be changed to show the senjutsu image of naruto in sage mode
    }


        return(<div>
            <img src = {mode}></img> {/* the mode image updater is shown here */}
            <button onClick = {(event)=> sm(event)}> Explore SAGE MODE </button> {/*this button when clicked gens the event object and passes it into the sm function and runs the shit with the event thingy */}
            </div>)


}

export default Sagemode