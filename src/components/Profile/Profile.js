import MyPosts from './MyPosts/MyPosts';
import './Profile.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return(
        <div className="content">
            <ProfileInfo/>
            <MyPosts post={props.postData}/>
        </div>
    )

}

export default Profile;