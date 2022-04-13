import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import './Navbar.css';

const Navbar = (props) => {
    let friendsData = props.friends.map((elem, i) =>
        <Sidebar 
            key={i}
            id={elem.id}
            name={elem.name}
        />
    );

    return(
        <>
            <nav className='nav'>
                <ul className="items">
                    <li className="item"> 
                        <NavLink to="/profile" active="true" >Profile</NavLink> 
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

                <div className='sidebar'>
                    <h2>Friends</h2>
                    <div className='friends'>
                       {friendsData}   
                    </div>
                   
                </div>
                               
            </nav>
        </>
    )
}

export default Navbar;