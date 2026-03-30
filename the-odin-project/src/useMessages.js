import { useEffect, useState } from "react"
import { addmsg, loader, delmsg, clrmsg } from "./Messagesapi"

const useMessages = () => {
    const[board, setBoard] = useState([])
    const[loading, setLoading] = useState(false)
    const[error, setError] = useState(null)


useEffect(() => {
    const fetchboard = async() => {
        try {
            setLoading(true)
            const update = await loader()
            setBoard(update)
        } catch (error) {
            setError(error.message)
            
        }finally{
            setLoading(false)
        }

    }

    fetchboard()
}, [])




const addMessage = async(msg) => {
    try {
        setLoading(true)
        const updated = await addmsg(msg)
        setBoard(updated) //anyone using this hooks whole component will get updated the next rerender with the updated table information.
    } catch (error) {
        setError(error.message)
        
    }finally{
        setLoading(false)
    }
}





const deleteMessage = async(id) => {
    try{
    setLoading(true)
    const updated = await delmsg(id)
    setBoard(updated)
    } catch(error){
    setError(error.message)

    }finally{
        setLoading(false)
    }
}


const clearMessage = async() => {
    try {
        setLoading(true)
        const updated = await clrmsg()
        setBoard(updated)
        
    } catch (error) {
        setError(error.message)
        
    } finally{
    setLoading(false)
}
}


return{addMessage, deleteMessage, clearMessage, error, loading, board}
}
export default useMessages

