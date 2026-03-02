const Shinobimissions = (props) => {
    const missionlog = props.items

    const Srankmissions = missionlog.filter(mission => mission.reward >= 100)

    const logbook = Srankmissions.map(mission => (<li key = {mission.id}>
                        <b>{mission.title}</b> &nbsp;
                        <p>{mission.spots}&nbsp;<b> Spots Left</b></p>
                        <p>{mission.rank}&nbsp;<b>Rank</b></p>
                        <p>{mission.reward}</p>
                        <p>{mission.rank === 'S' ? 'Jonin Required' : " " }</p>
                        {mission.spots === 0 ? 'Full': 'Joinable'}
                        
        
        </li>)

        
    )

    return(<ol>{logbook}</ol>)

}









export default Shinobimissions