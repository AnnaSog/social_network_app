import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <>
            <nav className='nav'>
                <ul className="items">
                    <li className="item"> 
                        <NavLink to="/profile" active>Profile</NavLink> 
                    </li>
                    <li className="item"> 
                        <NavLink to="/dialogs">Messages</NavLink> 
                    </li>
                    <li className="item"> 
                        <NavLink to="/news">News</NavLink>
                    </li>
                    <li className="item"> 
                        <NavLink to="/music">Music</NavLink>
                    </li>
                    <li className="item">
                        <NavLink to="/setting">Setting</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;