import React from 'react';
import { Link } from 'react-router-dom';

const Instructor = ({ instructor }) => {
    console.log(instructor)
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
                                <Link className='btn btn-outline my-2 px-5 lg:mx-3'>Update</Link>
                                <Link className='btn btn-outline px-6'>delete</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Instructor;