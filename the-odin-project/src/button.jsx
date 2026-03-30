import JBHIFI from "./JBHIF"

const Button = ({text, color, fontSize, eventer}) => {
    const buttonStyle = {
        color: color,
        fontSize: fontSize,
    }

    return(
        <button onClick={eventer} style = {buttonStyle} >{text}</button>
    )
}

export default Button