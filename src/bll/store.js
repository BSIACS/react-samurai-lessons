/*
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";



let store = {
    _state: {
        profilePage: {
            newPostTextAreaContent: '',
            posts: [
                { id: 1, header: "Super header", image: "https://place-hold.it/60x60",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda debitis esse,\n" +
                        "eum ex expedita illo inventore itaque quae reiciendis rem, repellat, suscipit voluptatem.\n" +
                        "Dignissimos distinctio facilis in labore tempora.A blanditiis commodi dicta distinctio\n" +
                        "dolor, dolores dolorum explicabo fugiat impedit itaque iure iusto laboriosam libero maxime\n" +
                        "necessitatibus nesciunt nihil nisi nulla obcaecati omnis praesentium repudiandae sed, sit vitae\n" +
                        "voluptate.Aliquid commodi cum deleniti distinctio dolorem, doloribus eos."
                },
                { id: 2, header: "Super header", image: "https://place-hold.it/60x60",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda debitis esse,\n" +
                        "eum ex expedita illo inventore itaque quae reiciendis rem, repellat, suscipit voluptatem.\n" +
                        "Dignissimos distinctio facilis in labore tempora.A blanditiis commodi dicta distinctio\n" +
                        "dolor, dolores dolorum explicabo fugiat impedit itaque iure iusto laboriosam libero maxime\n" +
                        "necessitatibus nesciunt nihil nisi nulla obcaecati omnis praesentium repudiandae sed, sit vitae\n" +
                        "voluptate.Aliquid commodi cum deleniti distinctio dolorem, doloribus eos."
                },
                { id: 3, header: "Super header", image: "https://place-hold.it/60x60",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda debitis esse,\n" +
                        "eum ex expedita illo inventore itaque quae reiciendis rem, repellat, suscipit voluptatem.\n" +
                        "Dignissimos distinctio facilis in labore tempora.A blanditiis commodi dicta distinctio\n" +
                        "dolor, dolores dolorum explicabo fugiat impedit itaque iure iusto laboriosam libero maxime\n" +
                        "necessitatibus nesciunt nihil nisi nulla obcaecati omnis praesentium repudiandae sed, sit vitae\n" +
                        "voluptate.Aliquid commodi cum deleniti distinctio dolorem, doloribus eos."
                },
                { id: 4, header: "Super header", image: "https://place-hold.it/60x60",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda debitis esse,\n" +
                        "eum ex expedita illo inventore itaque quae reiciendis rem, repellat, suscipit voluptatem.\n" +
                        "Dignissimos distinctio facilis in labore tempora.A blanditiis commodi dicta distinctio\n" +
                        "dolor, dolores dolorum explicabo fugiat impedit itaque iure iusto laboriosam libero maxime\n" +
                        "necessitatibus nesciunt nihil nisi nulla obcaecati omnis praesentium repudiandae sed, sit vitae\n" +
                        "voluptate.Aliquid commodi cum deleniti distinctio dolorem, doloribus eos."
                },
            ],
            textAreaValue: "",
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Jason"},
                {id: 2, name: "Alex"},
                {id: 3, name: "Diana"},
                {id: 4, name: "Sergey"},
                {id: 5, name: "Maria"},
                {id: 6, name: "James"},
                {id: 7, name: "John"},
            ],
            messages: [
                {id: 1, content: "Hi"},
                {id: 2, content: "Bonjour"},
                {id: 3, content: "Hello"},
                {id: 4, content: "Hello, Mr. Doe"},
                {id: 5, content: "What`s up?"},
            ],
            sendMessageTextAreaValue: '',
        },
        navbarPage: {},
    },

    stateChanged: () => {},

    subscribe(stateChangeHandler){
        this.stateChanged = stateChangeHandler;
    },

    getState(){
        return this._state;
    },

    testFunc: () => {
        console.log('Test func: ' + this);
    },

    dispatch(action){
        console.log('test');
        console.log(this._state);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this.stateChanged();
    }
}

export default store;


*/




