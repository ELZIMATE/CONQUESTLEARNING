


const Favouriteevents = (props) => {
    const favourites = []
    const events = props.items 

    for(let i = 0; i < events.length; i++){
        let singleevent =  events[i]
        if(singleevent.event === 'Coffee' || singleevent.event === 'Gym Push Session' || singleevent.event ==='Youth Fellowship: Basketball and dinner'){
            favourites.push(singleevent)
        }
    }

const favevents = favourites.map(event => (<li key = {event.id}>
    
    <p>{event.event}</p> 
    
    </li>)
)


return(<ol>{favevents}</ol>)
}




export default Favouriteevents