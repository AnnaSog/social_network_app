import {rerenderEntineTree} from '../render';

let state = {

    profilePage: {
        postData: [
            {id:1, message:"Anna is smart", like: 15},
            {id:2, message:"Anna is beautiful", like: 20}
        ],
        newPostText: ''
    },

    messagePage: {
        dialogData: [
            {id: 1, name:'Zhanna' },
            {id: 2, name:'Anna', },
            {id: 3, name:'Elizabeth', },
            {id: 4, name:'Catherine', },
            {id: 5, name:'William', },
            {id: 6, name:'Jon', }
        ],
        messagesData: [
            {id: 1, message:'Hi!'},
            {id: 2, message:'¿Cómo estás?'},
            {id: 3, message:'Здравствуйте!'},
            {id: 4, message:'Это похвально'},
            {id: 5, message:'Отлично!'},
            {id: 6, message:'Okay!'},
        ],
        newMessageText: ''  //изначально пустой
    },

    sidebar: {
        friends:[
            {id: 1, name:'Liza', },
            {id: 2, name:'Anna', },
            {id: 3, name:'Sveta', },
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message:state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';    //очищаем 
    rerenderEntineTree(state);     //перерендиваем ДОМ каждый раз после изменения state
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText ;
    rerenderEntineTree(state);     //перерендиваем ДОМ каждый раз после изменения state
}

export let addMessage = () => {
    let textMessage = {
        id: 7, 
        message: state.messagePage.newMessageText
    }
    state.messagePage.messagesData.push(textMessage);
    state.messagePage.newMessageText = '';    //очищаем 
    rerenderEntineTree(state);     //перерендиваем ДОМ каждый раз после изменения state
}

export let updateNewMessagePost = (newText) => {
    state.messagePage.newMessageText = newText;
    rerenderEntineTree(state);     //перерендиваем ДОМ каждый раз после изменения state
}

export default state;