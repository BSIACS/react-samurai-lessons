import React from 'react';
import classes from '../Users/Users.module.css'
import male from "../../img/male_s.jpg"
import female from "../../img/female_s.jpg"
//import {findAllByDisplayValue} from "@testing-library/react";
const MALE = 'MALE';
const FEMALE = 'FEMALE';
let flag = true;

const Users = (props) => {
    //debugger;

    if(flag){
        flag = false;
        let _users = [
            { id: 1, followed: true, fullName: 'John Doe', gender: MALE, status: 'Like a boss', location: {city: 'Houston', country: 'USA'}},
            { id: 2, followed: false, fullName: 'Sergey Resnick', gender: MALE, status: 'Like a boss', location: {city: 'Moscow', country: 'Russia'}},
            { id: 3, followed: true, fullName: 'James', gender: MALE, status: 'Like a boss', location: {city: 'Minsk', country: 'Belarus'}},
            { id: 4, followed: false, fullName: 'Anna Pogoreltseva', gender: FEMALE, status: 'Like a boss', location: {city: 'Warsaw', country: 'Poland'}},
            { id: 5, followed: true, fullName: 'James', gender: MALE, status: 'Looking for a job', location: {city: 'Minsk', country: 'Belarus'}},
        ];
        props.setUsers(_users);
    }

    return <div>
        {
            props.users.map((user) => {
                return <div className={classes.users} key={user.id}>
                    <div className={classes.users__left_block}>
                        {
                            user.gender === 'MALE' /*Исправить на константу*/
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
                            ? <button className={classes.btn_follow_unfollow} onClick={ () => { props.unfollow(user.id) } } >Unfollow</button>
                            : <button className={classes.btn_follow_unfollow} onClick={ () => { props.follow(user.id) } } >Follow</button> }
                    </div>
                </div>
            })
        }
    </div>
}

export default Users;

//props.users.map(user => <div key={user.id}>{user.fullName}</div>)
