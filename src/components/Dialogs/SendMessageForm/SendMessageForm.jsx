import React from "react";
import {CHANGE_SEND_MESSAGE_TEXT_AREA_VALUE, SEND_MESSAGE} from "../../../bll/dialogsReducer";


const SendMessageForm = (props) => {

    let textArea = React.createRef();

    function sendMessageTextAreaChangedHandler(){
        props.dispatch(
            { type: CHANGE_SEND_MESSAGE_TEXT_AREA_VALUE, value: textArea.current.value}
        );
    }

    function sendMessageHandler(){
        props.dispatch(
            { type: SEND_MESSAGE }
        );
    }

    return (
        <form>
            <textarea ref={textArea} onChange={sendMessageTextAreaChangedHandler} name="" id="" cols="30" rows="3" value={props.sendMessageTextAreaValue}/>
            <input onClick={sendMessageHandler} type={"button"} value={'Send message'}/>
        </form>
    );
}

export default SendMessageForm;