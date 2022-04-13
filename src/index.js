import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state from './state/state';
import { addPost } from './state/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      dialog={state.messagePage.dialogData} 
      message={state.messagePage.messagesData} 
      post={state.profilePage.postData}
      friends={state.sidebar.friends}
      addPost={addPost}
    />
  </React.StrictMode>
);


//React17
// ReactDOM.render(
//   <React.StrictMode>
//     <App dialog={dialogData} message={messagesData} post={postData}/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
