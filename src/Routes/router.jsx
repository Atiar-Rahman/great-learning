import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';

import Courses from '../pages/Courses/Courses';
import Contact from '../pages/Contact/Contact';
import AboutUs from '../pages/AboutUs/AboutUs';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/Login/Login';
import AuthLayout from '../layout/AuthLayout';


import MyClass from '../pages/MyClass/MyClass';
import BlogLayout from '../layout/BlogLayout';
import Blog from '../pages/Blog/Blog';

import Register from '../pages/Register/Register';
import Team from '../pages/Team/Team';
import AddCourse from '../pages/AdminDashBoard/AddCourse';
import StudentDashBoard from '../layout/StudentDashBoard';
import AdminDashBoard from '../layout/AdminDashBoard';
import Profile from '../pages/StudentDashboard.jsx/Profile';
import AddConstructor from '../pages/AdminDashBoard/AddConstructor';
import ShowAllCourse from '../pages/AdminDashBoard/ShowAllCourse';
import ShowAllInstructor from '../pages/AdminDashBoard/ShowAllInstructor';
import WelCome from '../components/WelCome';
import CourseDetails from '../pages/CourseDetails/CourseDetails';


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
            },
            {
                path:'/team',
                element:<Team></Team>
            },
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader:({params})=>fetch(`http://localhost:3000/course/${params.id}`)
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
        path:'/dashboard/student',
        element:<StudentDashBoard></StudentDashBoard>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/dashboard/student',
                element:<WelCome user={'User'}></WelCome>
            },
            {
                path:'/dashboard/student/profile',
                element:<Profile></Profile>
            }
        ]
    },
    {
        path:'/dashboard/admin',
        element:<AdminDashBoard></AdminDashBoard>,
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:'/dashboard/admin',
                element:<WelCome user={'Admin'}></WelCome>
            },
            {
                path:'/dashboard/admin/addcource',
                element:<AddCourse></AddCourse>
            },
            {
                path:'/dashboard/admin/addconstructor',
                element:<AddConstructor></AddConstructor>
            },
            {
                path:'/dashboard/admin/showcourses',
                element:<ShowAllCourse></ShowAllCourse>
            },
            {
                path:'/dashboard/admin/showinstructors',
                element:<ShowAllInstructor></ShowAllInstructor>
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