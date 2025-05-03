import React, { useEffect, useState } from 'react';
import User from '../../components/User';

const ShowAllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Authentication token not found');
                }

                const response = await fetch('https://great-learning-server-atiars-projects-57624e75.vercel.app/users', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`Failed to fetch users: ${errorText}`);
                }

                const data = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching users:', err);
                setError(err.message || 'Failed to load users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return <div className="text-center my-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center my-10 text-red-500">{error}</div>;
    }

    return (
        <div>
            <h1 className="text-3xl text-center my-10 font-bold">Show All Users</h1>
            <table className="table w-full border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Photo</th>
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Email</th>
                        <th className="border px-4 py-2">Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user) => (
                            <User key={user._id} user={user} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center py-4">
                                No users found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ShowAllUsers;
