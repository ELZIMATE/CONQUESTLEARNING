import { useState } from "react"

const ChakraCalulator = () => {
    const[chakra, useChakra] = useState(1000) //we are storing chakra inside the chakra stateful variable which is being changed by useChakra setter function
    //everytime useChakra runs what we pass in effects the chakra and changes that. Use state is what we start up the chakra as so this case we put 1000 start chakra value 
    //at 1000 and then usechakra can alter and change that when we pass shit into it.

    const perform = () => { //we create a function which when it is used, 
        useChakra(prev => { // the setter function is called and commanded to get the most recent chakra value stored inside the chakra stateful variable and pass it under the name prev 
            //prev => {} = take prev (as we said gets given by the setter useChakra the most up to date chakra value) => do what is in here {} with it
            if (prev <= 0) return prev//check if the previous or prev most recent chakra is less than or = 0 if so that means all chakra is used and we return back as is without doing anything to it.
    else{//lets say it isnt <=0 than we take that number and 
        return prev - 200 //return back whatever it is - 200 to the useChakra setter who called it and than that will update the chakra stateful variable.
    }
})
}

    const rest = () => {//we create another called rest 
        useChakra(//calls in the useChakra setter
            prev => {if (prev >= 1000) return prev //itll get the most recent or previous chakra value check the () condition and return back no change to what called if true.
                else{//else 
                    return prev + 400 //take it we rest now add 400 and give back the value to the chakra state.

                }
    })
}

        return(<div> {/*here is the display zone it is returned to the app.jsx area <ChakraCalculator/> where it shows this shit*/}
            <p>{chakra}</p>{/*this state will be showing the current chakra on screen */}
        <button onClick = {perform}>Use Jutsu</button> {/*when we click the button displayed here all the shit inside perform will happen */}
           <button onClick = {rest}>rest</button>{/*when we click the button displayed here all the shit inside rest will happen */}
        
        </div> //{/* here is a parent element of div we need this if we want to display more than one type of html element */}
    )
        
    }

export default ChakraCalulator