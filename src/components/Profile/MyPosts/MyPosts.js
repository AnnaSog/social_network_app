import './MyPosts.css'
import Post from './Post/Post';

const MyPosts = ({post}) => {

    let postsElements = post.map(elem => <Post key={elem.id} message={elem.message} like={elem.like}/>)

    return (
        <div className='myPosts'>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>

            <div className="posts">
                {postsElements}
            </div>
       </div>
    )
}

export default MyPosts;