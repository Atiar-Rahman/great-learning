import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

import Courses from '../pages/Courses/Courses';
import Contact from '../pages/Contact/Contact';
import AboutUs from '../pages/AboutUs/AboutUs';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import AuthLayout from '../layout/AuthLayout';
import Dashboard from '../layout/Dashboard';
import StudentDashBoard from '../pages/StudentDashboard.jsx/StudentDashBoard';
import MyClass from '../pages/MyClass/MyClass';
import BlogLayout from '../layout/BlogLayout';
import Blog from '../pages/Blog/Blog';
import AdminDashBoard from '../pages/AdminDashBoard/AdminDashBoard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <NotFound></NotFound>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path:'/myclass',
                element:<MyClass></MyClass>
            }
            
        ]
    },
    {
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/dashboard/student',
                element:<StudentDashBoard></StudentDashBoard>
            },
            {
                path:'/dashboard/admin',
                element:<AdminDashBoard></AdminDashBoard>
            }
        ]
    },
    {
        path:'/blog',
        element:<BlogLayout></BlogLayout>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])

export default router;