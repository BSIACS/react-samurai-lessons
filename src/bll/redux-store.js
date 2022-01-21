import navbarReducer from "./navbarReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";

//const profileReducer = require("./profileReducer");
//const dialogsReducer = require("./dialogsReducer");
const {combineReducers} = require("redux");
const {createStore} = require("redux");

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer,
    usersPage: userReducer,
});

const store = createStore(reducers);

export default store;