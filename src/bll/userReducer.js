const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
//const MALE = 'MALE';
//const FEMALE = 'FEMALE';

let init = {
    users: [
        /*{ id: 1, followed: true, fullName: 'John Doe', gender: MALE, status: 'Like a boss', location: {city: 'Houston', country: 'USA'}},
            { id: 2, followed: false, fullName: 'Sergey Resnick', gender: MALE, status: 'Like a boss', location: {city: 'Moscow', country: 'Russia'}},
            { id: 3, followed: true, fullName: 'James', gender: MALE, status: 'Like a boss', location: {city: 'Minsk', country: 'Belarus'}},
            { id: 4, followed: false, fullName: 'Anna Pogoreltseva', gender: FEMALE, status: 'Like a boss', location: {city: 'Warsaw', country: 'Poland'}},
            { id: 5, followed: true, fullName: 'James', gender: MALE, status: 'Looking for a job', location: {city: 'Minsk', country: 'Belarus'}},*/
    ],
};

const userReducer = (state = init, action) => {
    console.log("user reducer");

    switch(action.type){
        case FOLLOW:
            let result = {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return { ...user, followed: true};
                    }
                    return user;
                })

            };
            console.log(result);
            return result;
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userId){
                        return { ...user, followed: false};
                    }

                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
                //users: [ ...state.users, ...action.users]
            };
        default:
            return {...state};
    }
}

export const followActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    };
}

export const unfollowActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    };
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users,
    };
}

export default userReducer;