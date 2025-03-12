import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {
                user?"userName":""
            }
        </div>
    );
};

export default Profile;