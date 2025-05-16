import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../../components/User';
import url from '../../url';

// 👉 Create a dedicated axios instance so ALL requests automatically carry cookies.
//    This avoids accidentally losing credentials when you add new calls later on.
const api = axios.create({
  baseURL: url,
  withCredentials: true, // always send Http‑Only cookies
});

const ShowAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setError('');

    try {
      const { data } = await api.get('/users');
      setUsers(data);
    } catch (err) {
      console.error('Error fetching users:', err);

      /*
        Backend returns 401 { message: 'token not provided' } when the cookie
        never arrives (common on production HTTPS without SameSite=None; Secure).
      */
      setError(
        err.response?.data?.message || err.message || 'Failed to fetch users.'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl text-center my-10 font-bold">All Users</h1>

      {loading && <p className="text-center text-gray-500">Loading…</p>}
      {error && (
        <p className="text-center text-red-500 mb-4 font-medium">{error}</p>
      )}

      <table className="table w-full border-collapse border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Photo</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Role</th>
          </tr>
        </thead>

        <tbody>
          {!loading && users.length === 0 && !error && (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-500">
                No users found
              </td>
            </tr>
          )}

          {users.map((user) => (
            <User key={user._id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAllUsers;
