


const Guilddictionary = (props) => {

    const header = props.header



    const currentguilds = props.items

    const inviteonly = currentguilds.filter(guild => guild.status === "invite only")

    const avaliable = inviteonly.map(inv => <li key={inv.id}>
                                        <p>{inv.name}</p>
                                        <p>{inv.status}</p>

    </li>)
    
    return(
        <><h2>{header}</h2><ol>{avaliable}</ol></>
    )

    

}

export default Guilddictionary