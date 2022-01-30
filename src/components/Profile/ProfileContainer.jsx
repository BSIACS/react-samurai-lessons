import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import AddPostContainer from './AddPost/AddPostContainer';
import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import axios from "axios";
import {setProfile__AC} from "../../bll/profileReducer";



class ProfileAPIContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.profile);
        axios.get(`http://test.loc/?page=index&action=getProfile&profileId=1`)
            .then(response => {
                console.log(response.data);
                this.props.setProfile(response.data);
            });
    }

    constructor(props) {
        super(props);
    }

    render = () => {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
}

const ProfileContainer = connect(mapStateToProps, {
    setProfile: setProfile__AC,
})(ProfileAPIContainer)

export default ProfileContainer;