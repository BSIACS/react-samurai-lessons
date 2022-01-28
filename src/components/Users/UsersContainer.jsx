import React from 'react';
import {connect} from "react-redux";
import Users from "./UsersC";
import {
    followActionCreator,
    setCurrentPageActionCreator, setUserCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../bll/userReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
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
        setCurrentPage: (currentPage) => {
            //debugger;
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        setUserCount: (totalUsersCount) => {
            dispatch(setUserCountActionCreator(totalUsersCount));
        },
    };
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UserContainer;