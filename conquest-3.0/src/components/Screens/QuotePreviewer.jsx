


import { Link } from "react-router-dom"
import Quotes from "../QuoteBook"

const QuotePrev = ({quoteCollection, qotd, ...feats}) => {


return(
    <>
<div className = 'preview-card'>
    <h3 style={{color: 'rgb(179, 139, 69)', marginBottom: '8px', letterSpacing: '2px'}}>QUOTES</h3>
<Link to="/QuoteBook"> QuoteBook 
<div style={{maxHeight:'100px', overflow:'hidden'}}>
        <p>{(quoteCollection.find(quote => quote.qotd === true)?.quote || 'No QUOTE SET')}</p> {/*it will now show the user date journal entry for them based on the chosen date in here which we set wth inputter and useffect b4.*/}
 </div>       
</Link>
</div>

</>

)
}

export default QuotePrev