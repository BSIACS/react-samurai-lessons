const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
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
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
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
                users: [...action.users]
                //users: [ ...state.users, ...action.users]
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        default:
            return {...state}; ///!!!!!!!!!!!!!!!!!!!!!!!
    }
}

export const follow__AC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    };
}

export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId: userId,
    };
}

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users,
    };
}

export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    };
}

export const setUserCountAC = (totalUsersCount) => {
    return{
        type: SET_USERS_COUNT,
        totalUsersCount: totalUsersCount,
    };
}

export const setIsFetchingAC = (isFetching) => {
    return {
        type: SET_IS_FETCHING,
        isFetching: isFetching,
    };
}

export default userReducer;