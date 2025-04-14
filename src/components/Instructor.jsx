import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import url from '../url'
const Instructor = ({ instructor }) => {
    // console.log(instructor)

     const handleDelete = _id => {
            console.log(_id)
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
                    fetch(`${url}/instructor/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            if (data.deletedCount>0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Course has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });
        }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    
                    <tbody>
                        
                        <tr>
                            
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={instructor.file}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{instructor.name}</div>
                                        <div className="text-sm opacity-50">{instructor.instructor_type}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Educational background
                                <br />
                                <span className="badge badge-ghost badge-sm">{instructor.education}</span>
                            </td>
                            <td>{instructor.description}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">{instructor.experience}</button>
                            </th>
                            <td>
                                <Link to={`/dashboard/admin/updateinstructor/${instructor._id}`} className='btn btn-outline my-2 px-5 lg:mx-3'>Update</Link>
                                <Link onClick={()=>handleDelete(instructor._id)} className='btn btn-outline px-6'>delete</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructor;