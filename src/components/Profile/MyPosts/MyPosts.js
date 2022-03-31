import './MyPosts.css'
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post 
                    message="Anna is smart" 
                    like="15"/>
                <Post 
                    message="Anna is beautiful"
                    like="20"/>
            </div>
       </div>
    )
}

export default MyPosts;