import img from "./assets/rasengan.jpg"
import hit from "./assets/boom.jpg"

const Rasengan = () => {
    

    
    const jutsu = (event) => event.target.src = hit //create the jutsu function it is going to have a box called event, // 
    // //the event box is filled with the obj we described that is auto gen from click we now utilise chaining to look insisde the object area of target src and assign it to hit which as we see has the image that will show when we click
    
    return(<img src={img} onClick={(event) => jutsu(event)}></img>)
    //return() here we will input what we want displayed
    //img src ={img} this will be an html image object where the source is stored inside under the title img
    //onClick={(event) => jutsu(event)} when clicked react will auto gen event obj this will be stored in the event parameter here and passed => to the function jutsu hence the jutsu(event)


}

console.log(hit)


export default Rasengan