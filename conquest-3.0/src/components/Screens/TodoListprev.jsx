import { Link } from "react-router-dom"
import ToDoBar from "./ToDoBar"

const ToDoListprev = ({dayData, ...feats}) => {



if (!dayData) return null

const tasks = dayData.ToDos || []

    return(
        <div className = 'preview-card'>
            <h3 style={{color: 'rgb(179, 139, 69)', marginBottom: '8px', letterSpacing: '2px'}}>ToDoList</h3>
        <Link to="/ToDoList"> 
    <ToDoBar tasks={tasks}/>
<div style={{maxHeight:'100px', overflow:'hidden'}}>
        {[...tasks].sort((a,b) => a.priority - b.priority).slice(0, 3).map((t, index) => (<li key={index}> {/* the day data array is being looped and we are checking if there 
    is an array inside and if there is it will sort out each of them by priority and use slice to slice out 0 - 3 */}
        
            {typeof t === 'string' ? t : t.task} {t.priority} {/* check the type of each individual t element we loop and if it is a string than just put is as is otherwise if t is obj just show t.task */}
        </li>
    ))}
 </div>       
</Link>
</div>
    )

}


export default ToDoListprev
