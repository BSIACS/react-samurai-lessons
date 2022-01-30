import React from 'react';
import {connect} from "react-redux";
//import UsersAPIContainer from "./UsersAPIContainer";
import {
    follow__AC,
    setCurrentPageAC, setIsFetchingAC, setUserCountAC,
    setUsersAC,
    unfollowAC
} from "../../bll/userReducer";
import axios from "axios";
import classes from "./UsersAPIContainer.module.css";
import Preloader from "../Miscellaneous/Preloader/Preloader";
import Users from "./Users";


class UsersAPIContainer extends React.Component {
    constructor(props) {
        //alert(""); //конструктор вызывается дважды Почему??? Оказывается из-за <React.StrictMode> в index.js
        super(props);
    }

    componentDidMount() {
        this.getUsers(this.props.currentPage, this.props.pageSize);
    }

    getUsers = (page, count) => {
        this.props.setUsers([]);
        this.props.setIsFetching(true);
        axios.get(`http://test.loc/?page=index&action=getUsers&sheet=${page}&count=${count}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setUserCount(response.data.count);
            })
    }

    onPageNumberClickHandler = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.getUsers(currentPage, this.props.pageSize);
    }

    render = () => {
        let pageQuantity = Math.ceil(this.props.totalUsersCount / this.props.pageSize);


        let pages = [];
        for (let i = 1; i <= pageQuantity; i++) {
            pages.push(i);
        }
        console.log(pages);

        return <div className={classes.users_container}>
            {
                this.props.isFetching ? <Preloader/> : null
            }
            <Users
                users={this.props.users}
                pages={pages}
                currentPage={this.props.currentPage}
                onPageNumberClickHandler={this.onPageNumberClickHandler}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
    };
}

/*let mapDispatchToProps__OBSOLETE = (dispatch) => {
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
        setIsFetching: (isFetching) => {
            dispatch(setIsFetchingActionCreator(isFetching))
        },
    };
}*/

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: followAC,
        unfollow: unfollowAC,
        setUsers: setUsersAC,
        setCurrentPage: setCurrentPageAC,
        setUserCount: setUserCountAC,
        setIsFetching: setIsFetchingAC,
    };
}*/

const UserContainer = connect(mapStateToProps, {
    follow: follow__AC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setUserCount: setUserCountAC,
    setIsFetching: setIsFetchingAC,
}) (UsersAPIContainer);

export default UserContainer;