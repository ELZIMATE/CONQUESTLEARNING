import { useState } from "react"

const Counter = () => {


    const[count, counter] = useState(0)


    const increment = () => {
        counter(count + 1)
    }

    
    const decrement = () => {
        counter(count - 1)
    }

    const reset = () => {
    counter(count === 0)
    }

    return(<div>
        <p>COUNT TOTAL: {count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>=</button>


    </div>)
}

export default Counter