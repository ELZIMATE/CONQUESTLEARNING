const ProgressBar = ({workTime, socialTime, fitnessTime, leisureTime}) => { //this constructor is here to make the progress bar we need; states held physcialy usefeatures

    const total = workTime + socialTime + fitnessTime + leisureTime //the sumation of the progress bar is all these allocated time areas which make up what progress is 

    const workpercent = total > 0 ? (workTime/total) * 100 : 0 //we make a const that checks first if the numbered states we have under total actually have shit in them have the timers been set off
    const socialpercent = total > 0 ? (socialTime/total) * 100 : 0 //if the timer has been set off and state counter is couting we use this to take the timer for the individual categroy divide by total x 100 to get its percentage of the time its takes
    const fitnesspercent = total > 0 ? (fitnessTime/total) * 100 : 0 //else just keep it at 0 do nothing
    const leisurepercent = total > 0 ? (leisureTime/total) * 100 : 0


    return(
        <>
        
<div style={{width: `$100`, backgroundColor: `grey`, display: `flex`, height: `20px`}}> {/*here we make the physcial progress bar*/} 
        <div style={{width: `${workpercent}%`, height: `20px`, backgroundColor: `green`}}/> 
            <div style={{width: `${socialpercent}%`, height: `20px`, backgroundColor:`yellow`}}/>
            <div style={{width: `${fitnesspercent}%`, height: `20px`, backgroundColor:`blue`}}/>
            <div style={{width: `${leisurepercent}%`, height: `20px`, backgroundColor:`red`}}/>
    </div>
            
        
        </>
    )

}

export default ProgressBar