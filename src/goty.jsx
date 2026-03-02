import { useState } from "react";

const GOTY = () => {
    const[game, chooseGame] = useState({Title: "The Legend of Zelda: Breath of the Wild", //destrucutre const set the game stateful and chooseGame setter which sets the shit inside the statful game it is being started off with botw goty object and we will be changing it.
                                        Year: 2017,
                                        Studio: "Nintendo"})


    const title = (e) => {//takes the auto made event object which is made the moment onchange is triggered and passes in 
        chooseGame(g =>({...g, Title: e.target.value})) //choosegame will take the last update made and stored inside the game stateful so the last change and do this copy it into new obj and add title to be whatever was retrieved by the event.value info. 
        //IMPORTANT when we add the title in you may think 'hold on' if we copy the obj last updated in game stateful it already would have title with a value and it is now a dupe.
        //yeah thats what I thought but apparently when react sees 2 of same item it will replace the old with the most recent passed one in other word the new Title we assgined to have what we typed as its value will 
        //get rid of the old one inside the g prev updated obj.
        
    
    }

    const Year = (e) => {/* now year change is made and it will retrieve the same auto made event obj when react senses the change is being made but this time it is when it senses the number dial is being altered */
        chooseGame(g => ({...g, Year: e.target.value}))//{* choosegame controller is taken to control game stateful
            //first thing is it takes the last update made inside the game stateful stored under g and copies into new obj and ontop adds the year based on what the event object info said it was changed to and now that is put inside the stateful updated */}
//year variables new one cancels the copied old
    
    }

    const Studio = (e) => {
        chooseGame(g =>({...g, Studio: e.target.value}))
       
    
    }

return(<div>

<li>and the game of the year for {game.Year} goes to... {game.Title} by {game.Studio}</li>
<input value = {game.Title} onChange={title}></input> {/* inside the input box here the game title will be held and when it is changed the title function we made above will do the shit we said it does */}
<input value = {game.Year} type="Number"  onChange={Year}></input> {/* this input box will store the game.year item when changed it will run the shit we said in teh year func but this time it senses when the number pinwheel is changed */}
<input value = {game.Studio} onChange={Studio}></input>
</div>)
    



}

export default GOTY

