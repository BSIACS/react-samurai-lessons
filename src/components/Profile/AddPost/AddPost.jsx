import classes from "./AddPost.module.css";
import React from "react";
import {ADD_POST, CHANGE_ADD_POST_TEXT_AREA_VALUE} from "../../../bll/profileReducer";


const AddPost = (props) => {

    let newPostElement = React.createRef();

    function onClickHandler(){
        let postText = newPostElement.current.value;
        props.setPostText(postText);
    }

    function onTextChangeHandler(event){
        let text = newPostElement.current.value;
        console.log("onTextChangeHandler = " + text);
        props.updateTextAreaValue(text)
    }

    return (
        <div className={ classes.addPostForm }>
            <h3 className={ classes.addPostForm__header }>Add new post</h3>
            <form className={ classes.addPostForm__form } action="">
                <textarea
                    onChange={ onTextChangeHandler }
                    className={ classes.addPostForm__textarea }
                    ref={newPostElement}
                    value={props.newPostTextAreaContent}
                    cols="50" rows="10">
                </textarea>
                <div className={classes.addPostForm__bottomLine}>
                    <input
                        className={ classes.addPostForm__sendButton }
                        onClick={ onClickHandler }
                        type="button" value={"Add new post"}
                    />
                </div>
            </form>
        </div>
    );
};



export default AddPost;
