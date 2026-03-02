
const accessit = [] 


const Joinableguilds = (props) => {
    const accessable = props.items
    const header = props.header


    for(let i = 0; i<accessable.length; i++){
        let acc1 = accessable[i]
        if(acc1.status === 'invite only' || acc1.status ==='public'){
            accessit.push(<p>{acc1.name}</p>)
                
            


        }
        
    }
                return (
            <><h2>{header}</h2><ol>{accessit}</ol></>
        )





}

export default Joinableguilds