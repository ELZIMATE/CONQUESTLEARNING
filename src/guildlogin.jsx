const Guildlogin = (props) => {
    const success = <div className="login"><p>Welcome {props.username}</p></div>
    const failmsg = <div className="loginfail"><p>Please Sign in to Use Network Features</p></div>


    return(
    props.isLoggedin ? success : failmsg
    )
}
export default Guildlogin