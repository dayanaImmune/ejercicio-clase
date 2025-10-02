
import { Link } from 'react-router-dom'

function Header({ user }) {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home </Link></li>
                    <li><Link to="/about">About </Link></li>
                    {user ?
                        <>
                            {user.role === "consulting" ? <>
                                <li> <Link to="/product">Productos </Link></li>
                                <li> <Link to="/product">Productos2 </Link></li> </>
                                : ""}
                            {user.role === "user" ?
                                <li><Link to="/services">Servicios </Link></li>
                                : ""}
                            <li>
                                <Link to="/profile">Perfil </Link>
                            </li>
                        </>
                        : null
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header