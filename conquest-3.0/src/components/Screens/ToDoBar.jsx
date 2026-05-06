const ToDoBar = ({tasks = [], listdata}) => {
    const todoTasks = tasks.length ? tasks : (listdata || [])
    const completedTasks = todoTasks.filter((item) => item.complete).length
    const totalTasks = todoTasks.length
    const progressPercent = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100)


return(<>

<div style={{ width: `100%`, maxWidth: `420px`, margin: `16px 0` }}>
        <div style={{ display: `flex`, justifyContent: `space-between`, marginBottom: `6px` }}>
            <span>Task Progress</span>
            <span>{completedTasks}/{totalTasks} complete</span>
        </div>
        <div style={{ width: `100%`, height: `18px`, backgroundColor: `#d3d3d3`, borderRadius: `8px`, overflow: `hidden` }}>
            <div
                style={{
                    width: `${progressPercent}%`,
                    height: `100%`,
                    backgroundColor: `green`,
                    transition: `width 0.3s ease`
                }}
            />
        </div>
        <p>{progressPercent}%</p>
    </div>

</>
    
)
}




export default ToDoBar
