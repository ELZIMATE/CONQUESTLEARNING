
const Leafvillagemission = (props) => {

    const newerarray = props.items 


    const newmission = newerarray.filter(mission => mission.status ==="active")

    const activemissons = newmission.map(mission => <li key = {mission.id}>
                                            <b>{mission.status} - </b> &nbsp;
                                            <b>{mission.title}</b> &nbsp;
                                            <b>{mission.rank} : </b>


    </li>)


    
 




    return(
        <ol>{activemissons}</ol>
    )

}
export default Leafvillagemission