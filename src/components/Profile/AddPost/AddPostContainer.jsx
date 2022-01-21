import AddPost from "./AddPost";
import {ADD_POST, CHANGE_ADD_POST_TEXT_AREA_VALUE} from "../../../bll/profileReducer";
import {connect} from "react-redux";

/*const AddPostContainer = (props) => {

    let setPostTextHandler = (newPostText) => {
        props.store.dispatch(
            { type: ADD_POST, value: newPostText }     // addPostActionCreator 43 _ 4:00
        );
    };

    let updateTextAreaValueHandler = (newTextAreaValue) => {
        props.store.dispatch(
            { type: CHANGE_ADD_POST_TEXT_AREA_VALUE, value: newTextAreaValue }
        );
    };

    return (
        <AddPost
            setPostText = { setPostTextHandler }
            updateTextAreaValue={updateTextAreaValueHandler}
        />
    );
}*/

let mapStateToProps = (state) => {
    return {
        newPostTextAreaContent: state.profilePage.newPostTextAreaContent,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPostText: (newPostText) => {
            dispatch(
                {type: ADD_POST, value: newPostText}     // addPostActionCreator 43 _ 4:00
            );
        },
        updateTextAreaValue: (newTextAreaValue) => {
            dispatch(
                { type: CHANGE_ADD_POST_TEXT_AREA_VALUE, value: newTextAreaValue }
            );
        }
    };
}

const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

export default AddPostContainer;