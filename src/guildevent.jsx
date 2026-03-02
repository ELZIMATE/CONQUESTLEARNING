const Guildevent = (props) => {
const conditionalevent = props.items 

const condition2 = conditionalevent.filter (event => event.spots === 0 )
const condition = conditionalevent.filter(events => events.spots > 0 )

const activeevent = condition.map( condition => (<li key = {condition.id}>
                                <p>{condition.host}&nbsp;{condition.location} is active JOIN NOW!</p>
                                <b>{condition.spots} remain</b>


</li>))

const inactive = condition2.map(c2 => (<li key ={c2.id}>
    <p>{c2.location}&nbsp;{c2.host}</p>
    <b>{c2.spots} it is full</b>
</li>))



return(<ol>{activeevent}{inactive}</ol>)
}




export default Guildevent