import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import store from './bll/redux-store';
import {Provider} from "react-redux";


//store.testFunc();

export function render(_state){

    ReactDOM.render(
        //<React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        store={store}
                        state={_state}
                        dispatch={store.dispatch.bind(store)}
                    />
                </Provider>
            </BrowserRouter>,
        //</React.StrictMode>,
        document.getElementById('root')
    );
}

render(store.getState());

store.subscribe(() => {
    render(store.getState());
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

