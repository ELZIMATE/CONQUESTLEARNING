import { useEffect, useState } from "react"
import { addquote, fetchquotes } from "../hooks/backendapi/Featuresapi"
import NavBar from "./Navbar"


const Quotes = ({user, quote, setQuote, quoteStatus, setQuoteStatus, quoteCollection, setQuoteCollection, ...feats}) => {


    
    const [author, setAuthor] = useState('')
    const [qotd, setQotd] = useState('false')

    const quoteobj = {
        quote: quote,
        author: author,
        qotd: qotd 
    }


const quoteInput = async() => {


    
const Today =  new Date().toLocaleDateString('en-CA')
    const quote = {
        

            user_id: user.id,
            Quote: [...(quoteCollection || []), quoteobj
            ]


    }

    await addquote(quote)
    setQuoteCollection(prev => [...(prev || []), quoteobj])
setQuote('')



}

useEffect(() => {

    const QUOTELIST = async() => {
                const data = await fetchquotes()
                if(data) {

                    const allQuotes = data.flatMap(row => row.Quote || [])
    
                    setQuoteCollection(allQuotes)
                    }
                else{
                    setQuoteCollection(null)
                }
        
                
            }
            
            QUOTELIST()







},[])


const toggleQOTD = async(index) => {
 

        const updates = [...quoteCollection]
        updates.forEach(q => q.qotd = false)
        updates[index].qotd = true
        setQuoteCollection(updates)
        await addquote({
            
            user_id: user.id,
            Quote: updates

        })


    }


return(
    <>

    <input value={quote} onChange={(e) => setQuote(e.target.value)}></input>
    <input value={author} onChange={(e) => setAuthor(e.target.value)}></input>

    


    
<button onClick={quoteInput}></button>


{(quoteCollection || []).map((q, index) => <li key={index}>{q.quote}
     -  {q.author}    <input type="checkbox" value={qotd} checked={q.qotd}
    onChange={() => {toggleQOTD(index)}}></input>
     
</li>)}


    </>

    
)

return{qotd, setQotd}
}



export default Quotes