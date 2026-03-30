 import { Link } from 'react-router-dom'

import './AppPalate.css'

const NavBar = ({...feats}) => {

    return(
<nav className='sidebar'>
    <nav className='sidebar a'>
        


    <Link to="/"> Home </Link>
    <Link to="/timer"> Timer </Link>
    <Link to="/jounal"> Journal </Link>
    <Link to="/ToDoList"> ToDoList </Link>
    <Link to="/QuoteBook"> QuoteBook</Link>
    </nav>
</nav>

    )




}

export default NavBar