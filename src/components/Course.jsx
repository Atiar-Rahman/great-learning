import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import url from '../url';

const Course = ({ course }) => {
    // console.log(course)
    const handleDelete = _id => {
        // console.log(_id)
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
                fetch(`${url}/course/${_id}`, {
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
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>{course.title}</th>
                        <td>{course.duration}</td>
                        <td>{course.instructorName}</td>
                        <td>{course.money}</td>
                        <td><Link to={`/dashboard/admin/updatecourse/${course._id}`} className='btn btn-outline'>Update</Link></td>
                        <td><Link onClick={() => handleDelete(course._id)} className='btn btn-outline'>delete</Link></td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Course;