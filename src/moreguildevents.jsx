


const Moreguildevents = (props) => {
    const events = props.items 


const moreeventsarray = events.map( event => (<li key = {event.id}>
        
        
                                <p>{event => event.event}</p>
                                <p>{event => event.location}</p>
                                <b>{event.spots === 0 ? "Event FULL":`Event Has ${event.spots} left`}</b>
                                
                                </li> ))

return(<ol>{moreeventsarray}</ol>)


}


export default Moreguildevents