


import React, {useState} from 'react'




const Jutsu = () => {

    const[jutsu, setJutsu] = useState('Shadow Clones') //setJutsu controls what jutsu variable has, here the useState will start it with 'Shadow Clones'
    const[chakra, useChakra] = useState(1000)
    const[chakraavaliable, checkChakra] = useState(false)

    const Jutsuset = () => 
        setJutsu('Rasengan') //2 this will pass rasengan and make the justsu variable hold that instead

    const Rasenganuse = () =>
        useChakra(chakra - 150)

    const chakraleft = () =>
        checkChakra(!chakraavaliable)

    return(<div>
            <p>{jutsu} was used</p> {/* 3 This will then be updated to show Rasengan was used */}
            <button onClick = {Jutsuset} > use</button> {/* 1 when the button element we made here is clicked it will run justsu set function and setjutsu will change the stateful variable jutsu into 'rasengan' */}

                        <p>Charka left: {chakra} </p> {/* 3 This will then be updated to show Rasengan was used */}
                        <p> {chakra < 0 ? "Kakashi: You're all out Naruto rest up" : "Naruto: RASENGANNNNN!!!!!!!!!!"}</p>
            <button onClick = {Rasenganuse} > RASENGANNN </button> {/* 1 when the button element we made here is clicked it will run justsu set function and setjutsu will change the stateful variable jutsu into 'rasengan' */}

            <p>{chakraavaliable ? "yes" : "No"} </p> {/* 3 This will then be updated to show Rasengan was used */}
            <button onClick = {chakraleft} > RASENGANNN </button> {/* 1 when the button element we made here is clicked it will run justsu set function and setjutsu will change the stateful variable jutsu into 'rasengan' */}
            
    </div>)

}

export default Jutsu