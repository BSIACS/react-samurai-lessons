export const CHANGE_SEND_MESSAGE_TEXT_AREA_VALUE = 'CHANGE-SEND-MESSAGE-TEXT-AREA-VALUE';
export const SEND_MESSAGE = 'SEND-MESSAGE';

let init = {
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
}

let dialogsReducer = (state = init, action) => {

    switch(action.type){
        case SEND_MESSAGE:
            /*state.messages.push({
                id: state.messages.length + 1,
                content: state.sendMessageTextAreaValue,
            });
            return state;*/
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: state.messages.length + 1,
                        content: state.sendMessageTextAreaValue,
                    }
                ],
                sendMessageTextAreaValue: '',
            };
        case CHANGE_SEND_MESSAGE_TEXT_AREA_VALUE:
            /*state.sendMessageTextAreaValue = action.value;
            return state;*/
            return {
                ...state,
                sendMessageTextAreaValue: action.value,
            };
        default:
            return state;
    }
    return state;

}

export default dialogsReducer;