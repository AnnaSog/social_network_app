import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import "./Dialogs.css";


const Dialogs = ({dialogData, messageData}) => {

    let dialogsElements = dialogData.map((elem, i) => <DialogItem key={i} name={elem.name} id={elem.id}/>);
    let messagesElements = messageData.map((elem, i) => <Message key={i} message={elem.message}/> );

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