import './MyPosts.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id:1, message:"Anna is smart", like: 15},
        {id:2, message:"Anna is beautiful", like: 20}
    ];

    let postsElements = postData.map(elem => <Post key={elem.id} message={elem.message} like={elem.like}/>)

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