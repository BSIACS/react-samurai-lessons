const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const MALE = 'MALE';
const FEMALE = 'FEMALE';

let init = {
    users: [
        { id: 1, followed: true, fullName: 'Jason', gender: MALE, status: 'Like a boss', location: {city: 'Minsk', country: 'Belarus'}},
        { id: 2, followed: false, fullName: 'James', gender: MALE, status: 'Like a boss', location: {city: 'Minsk', country: 'Belarus'}},
        { id: 3, followed: true, fullName: 'James', gender: MALE, status: 'Like a boss', location: {city: 'Minsk', country: 'Belarus'}},
        { id: 4, followed: false, fullName: 'Anna ', gender: FEMALE, status: 'Like a boss', location: {city: 'Warsaw', country: 'Poland'}},
        { id: 5, followed: true, fullName: 'James', gender: MALE, status: 'Like a boss', location: {city: 'Minsk', country: 'Belarus'}},
    ],
};

const userReducer = (state = init, action) => {
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
                users: [ ...state.users, ...action.users]
            };
        default:
            return state;
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