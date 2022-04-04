import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let dialogData = [
  {id: 1, name:'Zhanna'},
  {id: 2, name:'Anna'},
  {id: 3, name:'Elizabeth'},
  {id: 4, name:'Yulia'},
  {id: 5, name:'Andrey'},
  {id: 6, name:'Arthur'}
];

let messagesData = [
  {id: 1, message:'Hi!'},
  {id: 2, message:'¿Cómo estás?'},
  {id: 3, message:'Здравствуйте!'},
  {id: 4, message:'Это похвально'},
  {id: 5, message:'Отлично!'},
  {id: 6, message:'Okay!'},
];

let postData = [
  {id:1, message:"Anna is smart", like: 15},
  {id:2, message:"Anna is beautiful", like: 20}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialog={dialogData} message={messagesData} post={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
