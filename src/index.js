import state, { subscribe } from './state/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { addPost, updateNewPostText, addMessage, updateNewMessagePost} from './state/state';

//SPA рендерит один раз, но чтобы рендерить и добавлять написанное на стене, необх.рендерить многократно и для этого рендер необходимо указать в фун-ии
const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntineTree = (state) => {
  root.render(
    <React.StrictMode>
      <App 
        dialog={state.messagePage.dialogData} 
        message={state.messagePage.messagesData} 
        post={state.profilePage.postData}
        newPostText={state.profilePage.newPostText}
        friends={state.sidebar.friends}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        newMessageText={state.messagePage.newMessageText}
        updateNewMessagePost={updateNewMessagePost}
      />
    </React.StrictMode>
  );
}
rerenderEntineTree(state);

subscribe(rerenderEntineTree)


