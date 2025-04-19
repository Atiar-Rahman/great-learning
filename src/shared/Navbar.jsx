import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/favicon.png';
import { IoMenu } from "react-icons/io5";
import AuthContext from '../context/AuthContext/AuthContext';
import Setting from '../components/Setting';

const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);

    const handleSignout=e=>{
        e.preventDefault;
        logOut()
        .then(()=>{

        })
        .catch(error=>{
            console.log(error);
        })
    }


    const links = <>
        <NavLink className={({ isActive, isPending }) => `mr-3 ${isPending ? "" : isActive ? "border-b-4 text-red-400" : ""}`} to={'/'}>Home</NavLink>
        <NavLink className={({ isActive, isPending }) => `mr-3 ${isPending ? "" : isActive ? "border-b-4 text-red-400" : ""}`} to={'/about'}>About Us</NavLink>
        <NavLink className={({ isActive, isPending }) => `mr-3 ${isPending ? "" : isActive ? "border-b-4 text-red-400" : ""}`} to={'/contact'}>Contact</NavLink>
        <NavLink className={({ isActive, isPending }) => `mr-3 ${isPending ? "" : isActive ? "border-b-4 text-red-400" : ""}`} to={'/courses'}>Courses Syllabus</NavLink>
        <NavLink className={({ isActive, isPending }) => `mr-3 ${isPending ? "" : isActive ? "border-b-4 text-red-400" : ""}`} to={'/myclass'}>My Classes</NavLink>
        <NavLink className={({ isActive, isPending }) => `mr-3 ${isPending ? "" : isActive ? "border-b-4 text-red-400" : ""}`} to={'/team'}>Show instructor</NavLink>
        <NavLink className={({ isActive, isPending }) => `mr-3 ${isPending ? "" : isActive ? "border-b-4 text-red-400" : ""}`} to={'/dashboard/student'}>Dashbord</NavLink>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <IoMenu className='text-2xl font-bold'></IoMenu>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={logo} alt="" />
                    <a className="btn btn-ghost text-xl">Great Learning</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='mr-4 btn btn-outline'>
                    {
                        user ? <>
                            <button onClick={handleSignout}>SignOut</button>
                        </> : <>
                            <button><NavLink to={'/auth/login'}>Login</NavLink></button>
                        </>
                    }

                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="m-1"><div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                            {
                                user?<><img src={user.photoURL} /></>:<><img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" /></>
                            }
                        </div>
                    </div></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                        <li><NavLink to={'/dashboard/student'}>DashBoard</NavLink></li>
                        <li><NavLink to={'/blog'}>Blog tutorial</NavLink></li>
                        <li><NavLink to={'/setting'}>Setting</NavLink></li>
                        <Setting></Setting>
                        
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;