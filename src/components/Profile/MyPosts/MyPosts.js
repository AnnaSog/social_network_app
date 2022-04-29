import { useRef } from 'react';
import './MyPosts.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.post.map(elem => <Post key={elem.id} message={elem.message} like={elem.like}/>)

    const ref = useRef(null);

    const addPost = ()=> {
        let textPost = ref.current.value;  //узнаем, что вносит пользователь
        props.addPost(textPost);
    }

    const onPostChange = () => {
        let textPost = ref.current.value;  //узнаем, что вносит пользователь
        props.updateNewPostText(textPost);   
    }

    return (
        <div className='myPosts'>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={ref} value={props.newPostText} placeholder="Что у вас нового?"/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className="posts">
                {postsElements}
            </div>
       </div>
    )
}

export default MyPosts;