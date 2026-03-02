import React, {useState} from 'react'









const Training = () => {

    const[Rasengan, useRasengan] = useState('go')//usestate will start the stateful variable to show go 
    const[cost, costRasengan] = useState(1000)//we start the cost at 1000

    const RASENGAN = () => {
        useRasengan('RASENGAN')//useRasengan setter variable controls rasengan here it maeks rasenagn = 'Rasengan' word
        costRasengan(cost - 150)//setter here will take cost - 150 from it for when rasengan is ran onclicks

    }

    const CHIDORI = () => {
        useRasengan('CHIDORI')
        costRasengan(cost - 100)

    }

    return(<div className='TRAINING'>

    <p>{Rasengan} was used, {cost} is left</p>{/*constand updates made to show and reflect the stateful variable on each click */}
    <button onClick = {RASENGAN} className='RASENGAN'>USE RASENGAN</button >{/*click this and watch it run RASENGAN which runs the setters to update the stateful var */}

    <button onClick = {CHIDORI} className='CHIDORI'>USE CHIDORI</button >
        
        
        
        </div>)



}


export default Training