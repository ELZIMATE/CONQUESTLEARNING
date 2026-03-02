
const Guildslist = (props) => { /* now here we have the members array inside the guildlist function passed secrectly behind the props parameter just to signal we will be using props from the parent app.jsx*/


//members.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical sorting 
//members.sort((a, b) => a.status.localeCompare(b.status));//alphabetical
//members.sort((a, b) =>  b.meetupshosted - a.meetupshosted)//sorting by highest to lowest
 
const memberlist = props.items /*from that we will chain to get the prop of items which is holding an array and put it inside the memberlist const*/

const title =<h3 className="titles">{props.category}</h3>




const membernames = memberlist.map(member => <li key = {member.id}> {/*we will take the memberlist now storing the array prop and use map (loop it and make new array doing the following), for each member in there{obj})
do this => assign a key tracker to attach to each one for sake of referral 'li key = {member id}' this will show as a listed html element number*/}
                                                {member.name}:&nbsp; {/*get each member obj name of each one &nbsp no break space put a space*/}
                                                <b>{member.status} - &nbsp;</b> {/*we also want to fetch the status of each member from the array*/}
                                                <b>{member.meetupshosted}</b></li>) /*and how many meetups they have hosted*/



return(<>
{title}
<ol className="namesofmembers">{membernames}</ol> {/*return it back and display*/}
</>
)






}



export default Guildslist