import { useState } from "react"

const Messages = ({addMessage, deleteMessage, clearMessage, loading, board, error }) => {

    const[message, setMessage] = useState('')
    const[title, setTitle] = useState('')


    const createMessage = async() =>{
        if(message !== '' || title !== ''){
            const msg = {
            id: Date.now(),
            title,
            message,
        }

        await addMessage(msg)

        }
  
    }





return(
    <>
    <li>Message Board</li>
    <input title ={title} onChange={(e) => setTitle(e.target.value)}></input>
    <input type="textbox" value={message} onChange ={(e) => setMessage(e.target.value)}></input>
    <button onClick={createMessage}></button>

    {loading ? <p>load date...</p> : null }
    {error && <p style={{ color: 'red' }}>{error}</p>}



    <div> 
        {board.map(b => <li key={b.id}> 
            {b.message} - 
            {b.title}
            <button onClick={() => deleteMessage(b.id)}></button>
        </li>)}

        <button onClick={clearMessage}/>
    </div>
    </>
)    
}


export default Messages