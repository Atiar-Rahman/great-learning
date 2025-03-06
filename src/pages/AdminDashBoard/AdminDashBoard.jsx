import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDashBoard = () => {
    return (
        <div>
            <div>
                <h1>sidebar</h1>
            </div>
            <div>
                <Outlet></Outlet> 
            </div>
        </div>
    );
};

export default AdminDashBoard;