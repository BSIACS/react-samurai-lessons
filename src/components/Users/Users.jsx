import classes from "./Users.module.css";
import male from "../../img/male_s.jpg";
import female from "../../img/female_s.jpg";
import React from "react";

let Users = (props) => {
    return <div>
        <div className={classes.page_numbers_block}>
            {
                props.pages.map((index) => {
                    if(props.currentPage === index){
                        return <span className={classes.page_numbers_block__selected} onClick={
                            () => {props.onPageNumberClickHandler(index)}} key={index}>{index}</span>
                    }
                    else{
                        return <span onClick={() => {props.onPageNumberClickHandler(index)}} key={index}>{index}</span>
                    }
                })
            }
        </div>

        <div>
            {
                props.users.map((user) => {
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

                            {user.followed
                                ? <button className={classes.btn_follow_unfollow} onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button className={classes.btn_follow_unfollow} onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Users;