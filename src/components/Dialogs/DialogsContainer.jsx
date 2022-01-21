

import React from "react";
import {CHANGE_SEND_MESSAGE_TEXT_AREA_VALUE, SEND_MESSAGE} from "../../bll/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {logDOM} from "@testing-library/react";

const DialogsContainer = (props) => {

    function sendMessageTextAreaChangedHandler(text){
        props.store.dispatch(
            { type: CHANGE_SEND_MESSAGE_TEXT_AREA_VALUE, value: text}
        );
    }

    function sendMessageHandler(){
        props.store.dispatch(
            { type: SEND_MESSAGE }
        );
    }

    return (
        <Dialogs
            sendMessageTextAreaChanged={sendMessageTextAreaChangedHandler}
            sendMessage={sendMessageHandler}
            dialogs={props.store.getState().dialogsPage.dialogs}
            messages={props.store.getState().dialogsPage.messages}
            sendMessageTextAreaValue={props.store.getState().dialogsPage.sendMessageTextAreaValue}
        />
    );
}

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        sendMessageTextAreaValue: state.dialogsPage.sendMessageTextAreaValue,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessageTextAreaChanged: (text) => {
            dispatch(
                { type: CHANGE_SEND_MESSAGE_TEXT_AREA_VALUE, value: text}
            );
        },
        sendMessage: () => {
            dispatch(
                { type: SEND_MESSAGE }
            )
        },
    };
}


const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default SuperDialogsContainer;