const Quotes = ({quote, setQuote, quoteStatus, setQuoteStatus, quoteCollection, setQuoteCollection}) => {




    


return(
    <>


    <input value={quote} onChange={(e) => setQuote(e.target.value)}></input>
    


    
<button onClick={() => {setQuoteCollection(prev => [...prev, quote])
setQuote('')
setQuoteStatus(true)

}}></button>


{quoteStatus && quoteCollection.map((q) => <li>{q}</li>)}
    </>
)
}


export default Quotes