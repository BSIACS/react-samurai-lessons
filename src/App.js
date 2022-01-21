import React from 'react';
import './sass/style.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route, Routes} from 'react-router-dom';
import SuperDialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App(props) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="content">
                <Routes>
                    <Route path="/profile"
                           element={
                               <Profile
                                   profilePageState={props.state.profilePage}
                                   dispatch={props.dispatch}
                                   store={props.store}
                               />}
                    />
                    <Route path="/dialogs" element={
                        <SuperDialogsContainer store={props.store}/>
                    }/>
                    <Route path="/users" element={
                        <UsersContainer store={props.store}/>
                    }/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
