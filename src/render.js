import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//SPA рендерит один раз, но чтобы рендерить и добавлять написанное на стене, необх.рендерить многократно и для этого рендер необходимо указать в фун-ии
export let rerenderEntineTree = (state, addPost) => {
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
}
