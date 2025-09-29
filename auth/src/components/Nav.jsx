import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/login"> Login </Link></li>
                <li><Link to="/profile"> profile </Link></li>
                <li><Link to="/pending"> Pendiente </Link></li>
            </ul>

        </nav>
    )
}

export default Nav