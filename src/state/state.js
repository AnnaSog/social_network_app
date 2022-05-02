let rerenderEntineTree = () => {    //фиктивный для привязки к главному rerenderEntineTree в index.js (см. фун-ию subscribe)
    console.log('State change');
}

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

export const addPost = () => {
    let newPost = {
        id: 3,
        message:state.profilePage.newPostText,
        like: 0
    }
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';    //очищаем 
    rerenderEntineTree(state);     //перерендиваем ДОМ каждый раз после изменения state
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText ;
    rerenderEntineTree(state);     //перерендиваем ДОМ каждый раз после изменения state
}

export const addMessage = () => {
    let textMessage = {
        id: 7, 
        message: state.messagePage.newMessageText
    }
    state.messagePage.messagesData.push(textMessage);
    state.messagePage.newMessageText = '';    //очищаем 
    rerenderEntineTree(state);     //перерендиваем ДОМ каждый раз после изменения state
}

export const updateNewMessagePost = (newText) => {
    state.messagePage.newMessageText = newText;
    rerenderEntineTree(state);     //перерендиваем ДОМ каждый раз после изменения state
}

export const subscribe = (observer) => {    //с помощью subscribe и observer(из ООП) привяжем локальный rerenderEntineTree с главным в index.js без импорта и цикличной зависимоси
    rerenderEntineTree = observer;  
}

export default state;