import React, { useContext } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { Link, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';

const StudentDashBoard = () => {
    const {logOut} = useContext(AuthContext);

    const handleLogout=()=>{
        logOut()
        .then()
        .catch(err=>{
            console.log(err)
        })
    }
        return (
        <div className='grid grid-cols-12 gap-20'>
            <div>
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-primary drawer-button text-3xl"><IoMenuSharp /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/dashboard/student/profile'>Profile</Link></li>
                            <li><button onClick={handleLogout}>LogOut</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default StudentDashBoard;