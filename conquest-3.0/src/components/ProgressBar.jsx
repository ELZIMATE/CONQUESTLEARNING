const ProgressBar = ({ workTime = 0, socialTime = 0, fitnessTime = 0, leisureTime = 0 }) => {
    const total = workTime + socialTime + fitnessTime + leisureTime //creates the total value for the entire progresscircle

    const formattime = (seconds) => {
        const hrs = Math.floor(seconds / 3600)
        const mins = Math.floor((seconds % 3600) / 60)
        const secs = seconds % 60

        return `${String(hrs).padStart(2, `0`)} : ${String(mins).padStart(2, `0`)} : ${String(secs).padStart(2, `0`)}`
    }

    const size = 220 //how big the total circle actually is
    const strokeWidth = 28 //how wide the donut going around is 
    const radius = (size - strokeWidth) / 2 //distance from the middle to endge of circle we need to get rid of the inner donut stroke to count this right
    const circumference = 2 * Math.PI * radius //distance around the circle
    const untracked = 86400 - total

    //dimensions are set and put in boxes consts each titled for further reference

    const segments = [
        { label: `Work`, value: workTime, color: `green` },
        { label: `Social`, value: socialTime, color: `yellow` },
        { label: `Fitness`, value: fitnessTime, color: `blue` },
        { label: `Leisure`, value: leisureTime, color: `red` },
        {label: `Untracked`, value: untracked, color: `purple`}
    ]

    let accumulatedLength = 0 //total of how much each segment has been drawn out or how much each timer has been running 

    return (
        <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, width: `100%` }}>
            <div style={{ position: `relative`, width: `${size}px`, height: `${size}px` }}>
                <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="none"
                        stroke="#d3d3d3"
                        strokeWidth={strokeWidth}
                    />

                    {segments.map((segment) => {
                        const percentage = segment.value / 86400
                        const segmentLength = circumference * percentage
                        const dashOffset = -accumulatedLength

                        accumulatedLength += segmentLength

                        if (segmentLength <= 0) {
                            return null
                        }

                        return (
                            <circle
                                key={segment.label}
                                cx={size / 2}
                                cy={size / 2}
                                r={radius}
                                fill="none"
                                stroke={segment.color}
                                strokeWidth={strokeWidth}
                                strokeDasharray={`${segmentLength} ${circumference}`}
                                strokeDashoffset={dashOffset}
                                strokeLinecap="butt"
                                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                            />
                        )
                    })}
                </svg>

                <div
                    style={{
                        position: `absolute`,
                        inset: 0,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        flexDirection: `column`,
                        textAlign: `center`
                    }}
                >
                    <span style={{ fontSize: `14px`, color: `#555` }}>Total time</span>
                    <strong>{formattime(total)}</strong>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar
