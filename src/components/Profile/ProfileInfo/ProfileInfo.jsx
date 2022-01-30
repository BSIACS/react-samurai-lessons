const ProfileInfo = function (props) {
    return (
        <div>
            <div>
                <img src="https://place-hold.it/990x130" alt=""/>
            </div>
            <div>
                Ava + description

                {props.profile.fullName}
            </div>
        </div>
    );
}

export default ProfileInfo;