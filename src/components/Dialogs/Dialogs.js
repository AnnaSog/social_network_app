import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import "./Dialogs.css";
import { useRef } from "react";

const Dialogs = ({dialogData, messageData}) => {

    const ref = useRef(null);

    const addMessage = () => {
        let textMessage = ref.current.value; //полуяаем инфо внесенное пользователем 
        console.log(textMessage);
    }
   
    let dialogsElements = dialogData.map((elem, i) =>
        <DialogItem key={i} 
            img={elem.img}
            name={elem.name} 
            id={elem.id} 
        />);
    let messagesElements = messageData.map((elem, i) =>
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
                    <textarea ref={ref}></textarea> 
                    </div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;