import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    console.log(course)
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
                        <td><Link className='btn btn-outline'>Update</Link></td>
                        <td><Link className='btn btn-outline'>delete</Link></td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Course;