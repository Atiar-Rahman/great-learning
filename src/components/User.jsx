import React from 'react';
import Swal from 'sweetalert2';
import url from '../url';
import axios from 'axios';

const User = ({ user }) => {

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${url}/users/${id}`,{
        withCredentials: true,
      })
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success"
              });
            }
          })
          .catch(err => {
            console.error("Error deleting user:", err);
          });
      }
    });
  };

  const handleMakeAdmin = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, admin!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.patch(`${url}/users/admin/${id}`,{
        withCredentials: true,
      })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.displayName} is now an admin`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(err => {
        console.error("Failed to make admin:", err);
      });
      }
    });
    
  };

  return (
    <tr className="text-center">
      <td className='border'>
        <div className="flex justify-center items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={user.photourl}
                alt="user avatar"
              />
            </div>
          </div>
        </div>
      </td>
      <td className='border'>{user.displayName}</td>
      <td className='border'>{user.email}</td>
      <td className='border'>
        {
          user.role === 'admin' ? (
            'Admin'
          ) : (
            <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs">Make Admin</button>
          )
        }
        <button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost btn-xs ml-2">Delete</button>
      </td>
    </tr>
  );
};

export default User;
