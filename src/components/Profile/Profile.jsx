import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import AddPostContainer from './AddPost/AddPostContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <AddPostContainer
                store={ props.store }
            />
            <MyPostsContainer
                store={ props.store }
            />
        </div>
    );
}

export default Profile;