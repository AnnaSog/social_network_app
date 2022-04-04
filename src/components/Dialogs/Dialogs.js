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

    let messagesData = [
        {id: 1, message:'Hi!'},
        {id: 2, message:'¿Cómo estás?'},
        {id: 3, message:'Здравствуйте!'},
        {id: 4, message:'Это похвально'},
        {id: 5, message:'Отлично!'},
        {id: 6, message:'Okay!'},
    ]

    let dialogsElements = dialogData.map((elem,i) => <DialogItem key={i} name={elem.name} id={elem.id}/>);
    let messagesElements = messagesData.map((elem, i) => <Message key={i} message={elem.message}/> )

    return(
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;