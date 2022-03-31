import { NavLink } from "react-router-dom";
import "./Dialogs.css";

const DialogItem = (props) => {
    let path = 'dialogs/' + props.id;

    return(
        <div className="item">
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className="message">{props.message}</div>

}

const Dialogs = (props) => {
    return(
        <div className="dialogs">
            <div className="dialogs-items">
                <DialogItem name='Zhanna' id='1'/>
                <DialogItem name='Anna' id='2'/>
                <DialogItem name='Elizabeth' id='3'/>
                <DialogItem name='Yulia' id='4'/>
                <DialogItem name='Andrey' id='5'/>
                <DialogItem name='Arthur' id='6'/>
            </div>
            <div className="messages">
                <Message message='Hi!'/>
                <Message message='¿Cómo estás?'/>
                <Message message='Здравствуйте!'/>
                <Message message='Это похвально'/>
                <Message message='Отлично!'/>
                <Message message='Okay!'/>
            </div>
        </div>
    )
}

export default Dialogs;