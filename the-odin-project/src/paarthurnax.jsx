

import Naruto, { Itachi } from "./naruto"
import useMessages from "./useMessages"
import Messages from "./messages"
import Button from "./button"
import JBHIFI from "./JBHIF"

const Paarthurnax = () => {

    const messageState = useMessages()
    return(
    <div>
                <h1>-Quote Book-</h1>
<svg>
  <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
</svg>
<form>
  <input type="text"/>
</form>



            <p>'what is better to be born good, or to overcome your evil nature through great effort' - Paarthurnax</p>
        <Naruto/>
        <Itachi/>
        <Button eventer={JBHIFI} text='hi' color = "orange" font = {12} />
        <Messages {...messageState}/> {/* now in here a rerender will happen to this component if we change data of any of the useMesages statefuls with their setter functions. */} 
        






    </div>




    )
}

export default Paarthurnax