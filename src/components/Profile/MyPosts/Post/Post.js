import './Post.css'

const Post = (props) => {

    return (
        <div>
            <div className='post'>
                <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/1d6f7c29-4c37-4ccb-a412-472b2216c659/280x420" alt="avatar" />
                {props.message}
                <div>
                    <span>{props.like}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;