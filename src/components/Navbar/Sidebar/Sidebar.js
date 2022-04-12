import './Sidebar.css';

const Sidebar = (props) => {
    return(
        <div className='friend-item'>
            {props.name}             
        </div>
    )
}

export default Sidebar;