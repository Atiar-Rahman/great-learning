import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='my-10 shadow-amber-400 shadow-2xl w-[600px] py-10 text-center  rounded-t-2xl'>
            <img src={user?user.photourl:""} alt="" />
            <div>
            <h1>UserName: {user?user.displayName:"UserName"}</h1>
            <h1>Email: {user?user.email:"UserName"}</h1>
            </div>
        </div>
    );
};

export default Profile;