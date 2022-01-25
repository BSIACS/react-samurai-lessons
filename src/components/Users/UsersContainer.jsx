import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../bll/userReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },

        setUsers: (users) => {
            //debugger;
            dispatch(setUsersActionCreator(users));
        },
    };
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UserContainer;