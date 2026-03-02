
import styles from "./button.module.css"



const Button = () => {
    let counter = 0
    

    const hello = (name) => {
        if(counter < 7){
        counter++
        console.log(`${name} you clicked me ${counter} times`)

        }else{
            console.log(`You clicked mee too many times`)
        }

    }


    return(<button onClick = {() => hello('Elias')}className={styles.button}>Click my dick</button>

    )
//return (display) a html button that when clicked ()=> do this pass in Elias to the hello nam eparameter 

//() => makes it so that react will do the function and pass in the name parameter name 'Elias' only later when clicked. Otherwise it runs immediately.


}

    export default Button