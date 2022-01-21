import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.jsx';
import Message from './Message/Message.jsx';
import React from "react";

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map( (item) => {
        return <Dialog name={ item.name } id={ item.id } key={ item.id }/>
    });

    let messageElements = props.messages.map( item => {
        return <Message id={ item.id } content={ item.content } key={ item.id }/>
    });

    let textArea = React.createRef();
    let test = this;

    function sendMessageTextAreaChangedHandler(){
        props.sendMessageTextAreaChanged(textArea.current.value);
    }

    function sendMessageHandler(){
        props.sendMessage();
    }

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogItems }>
                { dialogElements }
            </div>
            <div className={ classes.messages }>
                { messageElements }
                <form>
                    <textarea ref={textArea} onChange={ sendMessageTextAreaChangedHandler } name="" id="" cols="30" rows="3" value={props.sendMessageTextAreaValue}/>
                    <input onClick={sendMessageHandler} type={"button"} value={'Send message'}/>
                </form>
                {/*<SendMessageForm dispatch={props.dispatch} sendMessageTextAreaValue={props.dialogPageState.sendMessageTextAreaValue}/>*/}
            </div>
        </div>

    );
}

export default Dialogs;