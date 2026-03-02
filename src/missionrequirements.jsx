



const Missionrequirements = (props) => { //the things which are next to the components the equals words are kept inside (props) and need . to be chained with their name for access.

    const newarray = props.items

    const Sranks = <p>'REQUIRED: ALL JONIN'</p>
    const lessranks = <p>'Jonin Not Needed'</p>
 
    const required = newarray.map(miss => <li key = {miss.id}>
        {miss.rank === 'S' ? Sranks : lessranks}
        
    </li>
         
        
    );


    

    return(<ul><li>{required}</li></ul>)
}


export default Missionrequirements