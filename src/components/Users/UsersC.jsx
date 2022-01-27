import React from 'react';
import classes from "./Users.module.css";
import male from "../../img/male_s.jpg";
import female from "../../img/female_s.jpg";
import axios from "axios";


class Users extends React.Component{
    constructor(props) {
        //alert(""); //конструктор вызывается дважды Почему??? Оказывается из-за <React.StrictMode> в index.js
        super(props);
    }

    componentDidMount() {
        this.getUsers(this.props.currentPage, this.props.pageSize);
    }

    getUsers = (page, count) => {
        axios.get(`http://test.loc/?page=index&action=getUsers&sheet=${page}&count=${count}`)
            .then(response => {
                console.log("___Response received");
                this.props.setUsers(response.data.items);
            })
        /*this.props.setUsers(
            [
                { id: 1, followed: true, fullName: 'John Doe', gender: MALE, status: 'Like a boss', location: {city: 'Houston', country: 'USA'}},
                { id: 2, followed: false, fullName: 'Sergey Resnick', gender: MALE, status: 'Like a boss', location: {city: 'Moscow', country: 'Russia'}},
                { id: 3, followed: true, fullName: 'James', gender: MALE, status: 'Like a boss', location: {city: 'Minsk', country: 'Belarus'}},
                { id: 4, followed: false, fullName: 'Anna Pogoreltseva', gender: FEMALE, status: 'Like a boss', location: {city: 'Warsaw', country: 'Poland'}},
                { id: 5, followed: true, fullName: 'James', gender: MALE, status: 'Looking for a job', location: {city: 'Minsk', country: 'Belarus'}},
            ]
        );*/
    }

    setCurrentPage = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.getUsers(currentPage, this.props.pageSize);
    }

    render = () => {
        let pageQuantity = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        return <div>

            <div>Current page: { this.props.currentPage }</div>
            <span onClick={ () => {this.setCurrentPage(1)} }>1</span>
            <span onClick={ () => {this.setCurrentPage(2)} }>2</span>
            <span onClick={ () => {this.setCurrentPage(3)} }>3</span>
            <span onClick={ () => {this.setCurrentPage(4)} }>4</span>

            {
                this.props.users.map((user) => {
                    return <div className={classes.users} key={user.id}>
                        <div className={classes.users__left_block}>
                            {
                                user.gender === 'MALE' //*Исправить на константу*/!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                                    ? <img className={classes.users__avatar} src={male} alt="avatar"/>
                                    : <img className={classes.users__avatar} src={female} alt="avatar"/>
                            }
                        </div>
                        <div className={classes.users__center_block}>
                            <div className={classes.users__name}>
                                {user.fullName}
                            </div>
                            <div className={classes.users__location}>
                                Russia, Moscow
                            </div>
                            <div className={classes.users__status}>
                                Like a boss
                            </div>
                        </div>
                        <div className={classes.users__right_block}>

                            { user.followed
                                ? <button className={classes.btn_follow_unfollow} onClick={ () => { this.props.unfollow(user.id) } } >Unfollow</button>
                                : <button className={classes.btn_follow_unfollow} onClick={ () => { this.props.follow(user.id) } } >Follow</button> }
                        </div>
                    </div>
                })
            }
        </div>
    }
}

export default Users;