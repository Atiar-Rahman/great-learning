import React, { useEffect, useState } from 'react';
import url from '../../url';
import AuthContext from '../../context/AuthContext/AuthContext';
import User from '../../components/User';

const ShowAllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`${url}/users`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center my-10 font-bold'>Show all Users</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>photo</th>
                        <th>name</th>
                        <th>emaill</th>
                    </tr>
                </thead>
            </table>
            {
                users.map(user => <User key={user._id} user={user}></User>)
            }
        </div>
    )
};

export default ShowAllUsers;