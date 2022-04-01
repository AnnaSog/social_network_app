import './MyPosts.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id:1, message:"Anna is smart", like: 15},
        {id:1, message:"Anna is beautiful", like: 20}
    ]

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
                    message={postData[0].message}
                    like={postData[0].like}/>
                <Post 
                    message={postData[1].message}
                    like={postData[1].like}/>
            </div>
       </div>
    )
}

export default MyPosts;