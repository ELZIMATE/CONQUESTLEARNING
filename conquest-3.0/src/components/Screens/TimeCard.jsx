const TimeCard = ({label, currentTime, targetTime}) => {
console.log('TimeCard props:', label, currentTime, targetTime)
    
    const formattime = (seconds) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60

        return `${String(hrs).padStart(2, `0`)} : ${String(mins).padStart(2,`0`)} : ${String(secs).padStart(2, `0`)}`

    
    }

    const percentage = currentTime/targetTime * 100


    return(
        <>
        {label}
                <div>
        {formattime(currentTime)}
        </div>
        
        <div style={{width: '100%', height: '12px', backgroundColor:'gray'}}>
            <div style={{width: `${percentage}%`, backgroundColor: 'red', height: '12px', }}/>

        </div>

        </>
    )



}
export default TimeCard