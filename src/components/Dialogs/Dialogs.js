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

    let dialogData = [
        {id: 1, name:'Zhanna'},
        {id: 2, name:'Anna'},
        {id: 3, name:'Elizabeth'},
        {id: 4, name:'Yulia'},
        {id: 5, name:'Andrey'},
        {id: 6, name:'Arthur'}
    ]

    let messageData = [
        {id: 1, message:'Hi!'},
        {id: 2, message:'¿Cómo estás?'},
        {id: 3, message:'Здравствуйте!'},
        {id: 4, message:'Это похвально'},
        {id: 5, message:'Отлично!'},
        {id: 6, message:'Okay!'},
    ]

    return(
        <div className="dialogs">
            <div className="dialogs-items">
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
                <DialogItem name={dialogData[5].name} id={dialogData[5].id}/>
            </div>
            <div className="messages">
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
            </div>
        </div>
    )
}

export default Dialogs;