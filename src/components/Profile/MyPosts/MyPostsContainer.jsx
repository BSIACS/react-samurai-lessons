import MyPosts from "./MyPosts";
import React from "react";
import {connect} from "react-redux"


/*const MyPostsContainer = (props) => {

    let posts = props.store.getState().profilePage.posts;
    console.log(posts);

    return (
        <MyPosts posts={ posts }/>
    );
}*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
    };
}

const MyPostsContainer = connect(mapStateToProps) (MyPosts)

export default MyPostsContainer;