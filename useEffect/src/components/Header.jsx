
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <ul className="menu">
                <li> 
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header