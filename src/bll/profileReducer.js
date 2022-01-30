export const ADD_POST = 'ADD-POST';
export const CHANGE_ADD_POST_TEXT_AREA_VALUE = 'CHANGE-ADDPOST-TEXTAREA-VALUE';
export const SET_PROFILE = 'SET_PROFILE';

let init = {
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
    //textAreaValue: "",
    profile: {},
}

const profileReducer = (state = init, action) => {

    switch(action.type){

        case ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: state.posts.length + 1,
                        header: "Some new header",
                        image: "https://place-hold.it/60x60",
                        text: action.value,
                    }
                ],
                newPostTextAreaContent: '',
            }
        case CHANGE_ADD_POST_TEXT_AREA_VALUE:
            return {
                ...state,
                newPostTextAreaContent: action.value
            }
        case SET_PROFILE:
            console.log("____");
            console.log(action.profile);

            let result = {
                ...state,
                profile: {...action.profile},
            }

            console.log(result);

            return {
                ...state,
                profile: {...action.profile},
            }
        default:
            return state;
    }
}

export const setProfile__AC = (profile) => {
    return {
        type: SET_PROFILE,
        profile: profile
    }
}

export default profileReducer;
