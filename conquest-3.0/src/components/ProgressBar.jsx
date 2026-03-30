const ProgressBar = ({workTime, socialTime, fitnessTime, leisureTime}) => {

    const total = workTime + socialTime + fitnessTime + leisureTime

    const workpercent = total > 0 ? (workTime/total) * 100 : 0
    const socialpercent = total > 0 ? (socialTime/total) * 100 : 0
    const fitnesspercent = total > 0 ? (fitnessTime/total) * 100 : 0
    const leisurepercent = total > 0 ? (leisureTime/total) * 100 : 0


    return(
        <>
        
    <div style={{width: `$100`, backgroundColor: `grey`, display: `flex`, height: `20px`}}>
        <div style={{width: `${workpercent}%`, height: `20px`, backgroundColor: `green`}}/> 
            <div style={{width: `${socialpercent}%`, height: `20px`, backgroundColor:`yellow`}}/>
            <div style={{width: `${fitnesspercent}%`, height: `20px`, backgroundColor:`blue`}}/>
            <div style={{width: `${leisurepercent}%`, height: `20px`, backgroundColor:`red`}}/>
    </div>
            
        
        </>
    )

}

export default ProgressBar