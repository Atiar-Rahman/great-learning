// components/AdminDashBoard.js
import React from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import { Link, Outlet } from 'react-router-dom';
import { MdAddToPhotos } from "react-icons/md";

const AdminDashBoard = () => {


  return (
    <div className="flex flex-col md:flex-row gap-5">
      <div>
        <div className="drawer z-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button text-3xl">
              <IoMenuSharp />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full p-4">
              <li><Link to={'/dashboard/admin'}><MdAddToPhotos />Home</Link></li>
              <li><Link to={'/dashboard/admin/addcource'}><MdAddToPhotos />Add Course</Link></li>
              <li><Link to={'/dashboard/admin/addconstructor'}><MdAddToPhotos />Add Instructor</Link></li>
              <li><Link to={'/dashboard/admin/showcourses'}><MdAddToPhotos />Show All Courses</Link></li>
              <li><Link to={'/dashboard/admin/showinstructors'}><MdAddToPhotos />Show All Instructors</Link></li>
              <li><Link to={'/dashboard/admin/contactinfo'}><MdAddToPhotos />Contact Info</Link></li>
              <li><Link to={'/dashboard/admin/allusers'}><MdAddToPhotos />Show All Users</Link></li>
              <li><Link to={'/dashboard/admin/vedio'}><MdAddToPhotos />Course Video Upload</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashBoard;
