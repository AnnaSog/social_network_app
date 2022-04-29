import MyPosts from './MyPosts/MyPosts';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
        <div className="content">
            <ProfileInfo/>
            <MyPosts 
                post={props.postData} 
                addPost={props.addPost} 
                newPostText={props.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )

}

export default Profile;