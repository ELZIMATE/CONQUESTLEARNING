




const Guildmembers = (props) => { //guildmembers construct is made
    const guildevent = props.items



    
return( //whatever we return will get put into the guild members export and shown 
    
    <ul> {/*the following will be listed out as ul html style aka bullet form showing the nested shit as bullets*/}
        {guildevent.map((hangout, index) => ( //go through each {} in beacons array one by one and remember a new array will be made after .map() => (beacons.map), take each {} and put in inside a (hangout container (hangout secretly does const hangout and puts each {} inside and then attach a number to each one index) so index will be accept the number position of the hangout in the array it is in.
            <li key={index}> {/*we are making a listing item it wil show the nested shit on the screen which attachs a key number from react that changes each time the index or number position in the array changes*/}
                {hangout.host} - {hangout.event} - {hangout.attendees} - {hangout.location} - "join now" {/* please list off each obj and chain the host to shoe host (hangout.host) - as well as event to show event (hangout.event), and of course attendeed to show attendees (hangout.attendees)*/}
            </li> //we are listing it off by attaching a number or key signal tracker from react to correspond to the number position of the object in the array aka {index}
        ))}

    </ul> //the following of course is all being displayed in ul style format
        )
    



    
}



export default Guildmembers //pull this out so we can use it