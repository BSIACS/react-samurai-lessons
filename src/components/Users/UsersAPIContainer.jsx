import React from 'react';
import preloader from '../../img/preloader_f.gif';
import axios from "axios";
import Users from "./Users";
import Preloader from "../Miscellaneous/Preloader/Preloader";
import classes from './UsersAPIContainer.module.css';


/*class UsersAPIContainer extends React.Component {
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
}*/

//export default UsersAPIContainer;