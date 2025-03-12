import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { Link, Outlet } from 'react-router-dom';

const AdminDashBoard = () => {
    return (
        <div className='grid grid-cols-12'>
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
                            <li><Link to={'/dashboard/admin/addcource'}>add cource</Link></li>
                            <li><a>Sidebar Item 2</a></li>
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

export default AdminDashBoard;