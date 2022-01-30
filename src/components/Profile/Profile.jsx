import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AddPostContainer from "./AddPost/AddPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <AddPostContainer
                store={ props.store }
            />
            <MyPostsContainer
                store={ props.store }
            />
        </div>
    );
};

export default Profile;