import React from 'react';

const Users = (props) => {
    return <div>
        USERS WILL BE HERE
        {
            props.users.map(user => <div key={user.id}>{user.fullName}</div>)
        }
    </div>
}

export default Users;