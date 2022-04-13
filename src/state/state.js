// import Anna from '../img/Anna.jpg'

let state = {

    profilePage: {
        postData: [
            {id:1, message:"Anna is smart", like: 15},
            {id:2, message:"Anna is beautiful", like: 20}
        ]
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
    },

    sidebar: {
        friends:[
            {id: 1, name:'Liza', },
            {id: 2, name:'Anna', },
            {id: 3, name:'Sveta', },
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        message:postMessage,
        like: 0
    }
    state.profilePage.postData.push(newPost);
}

export default state;