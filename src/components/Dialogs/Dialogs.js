import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import "./Dialogs.css";
import { useRef } from "react";

const Dialogs = (props) => {

    const ref = useRef(null);

    const addMessage = () => {
        let textMessage = ref.current.value; //получаем инфо внесенное пользователем 
        props.addMessage(textMessage);
    }
    const onMessageChange = () => {
        let textMessage = ref.current.value; //получаем инфо внесенное пользователем 
        props.updateNewMessagePost(textMessage);
    }
   
    let dialogsElements = props.dialogData.map((elem, i) =>
        <DialogItem key={i} 
            img={elem.img}
            name={elem.name} 
            id={elem.id} 
        />);
    let messagesElements = props.messageData.map((elem, i) =>
        <Message key={i} 
            message={elem.message}
        />);

    return(
        <div className="dialogs">
            <div className="dialogs-items">
                {dialogsElements}
            </div>
            <div className="messages">
                {messagesElements}
                <div>
                    <div>
                        <textarea onChange={onMessageChange} ref={ref} value={props.newPostText}></textarea> 
                    </div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;