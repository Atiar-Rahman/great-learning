import React, { useEffect, useState } from 'react';
import User from '../../components/User';

const ShowAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  // To handle errors

    // Fetch token (assuming it's stored in localStorage, adjust based on your implementation)
    const token = localStorage.getItem('token');  // Or you can get it from cookies or context

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://great-learning-server-atiars-projects-57624e75.vercel.app/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`  // Pass the token here
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to load users');
                setLoading(false);
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, [token]);

    if (loading) {
        return <div className="text-center my-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center my-10 text-red-500">{error}</div>;
    }

    return (
        <div>
            <h1 className="text-3xl text-center my-10 font-bold">Show All Users</h1>
            <table className="table w-full">
                <thead className="border">
                    <tr>
                        <th className="border">Photo</th>
                        <th className="border">Name</th>
                        <th className="border">Email</th>
                        <th className="border">Role</th>
                    </tr>
                </thead>
                <tbody className="border">
                    {users.length > 0 ? (
                        users.map((user) => <User key={user._id} user={user} />)
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllUsers;
