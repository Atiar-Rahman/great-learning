import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';  // Make sure the path is correct
import User from '../../components/User';

const ShowAllUsers = () => {
    const [users, setUsers] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, [axiosPublic]);

    return (
        <div>
            <h1 className="text-3xl text-center my-10 font-bold">Show All Users</h1>
            <table className="table w-full">
                <thead className='border'>
                    <tr>
                        <th className='border'>Photo</th>
                        <th className='border'>Name</th>
                        <th className='border'>Email</th>
                        <th className='border'>Role</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    {
                        
                            users.map(user => <User key={user._id} user={user} />)
                        
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllUsers;
