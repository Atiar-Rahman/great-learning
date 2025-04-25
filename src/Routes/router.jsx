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

import BlogLayout from '../layout/BlogLayout';
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
import PrivateRoutes from './PrivateRoutes';
import EnrollCourse from '../pages/EnrollCourse/EnrollCourse';
import UpdateCourse from '../pages/AdminDashBoard/UpdateCourse';
import url from '../url';
import UpdateInstructor from '../pages/AdminDashBoard/UpdateInstructor';
import InstructorDetails from '../pages/Team/InstructorDetails';
import ContactInfos from '../pages/AdminDashBoard/ContactInfos';
import PaymentSuccess from '../pages/Payment/PaymentSuccess';
import PaymentFail from '../pages/Payment/PaymentFail';
import ShowAllUsers from '../pages/AdminDashBoard/ShowAllUsers';
import Blogs from '../pages/Blog/Blogs';
import ChatBoot from '../components/ChatBoot';

import VideoGallery from '../components/VideoGallery';

import VedioUpload from '../components/VedioUpload';


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
                path:'/team',
                element:<Team></Team>
            },
            {
                path:'/chat',
                element:<ChatBoot></ChatBoot>
            },
            {
                path:'/payment/success/:tranId',
                element:<PaymentSuccess></PaymentSuccess>
            },
            {
                path:'/payment/fail/:tranId',
                element:<PaymentFail></PaymentFail>
            },
            {
                path:'/team/:id',
                element:<InstructorDetails></InstructorDetails>,
                loader:({params})=>fetch(`${url}/instructor/${params.id}`)
            },
            {
                path:'/course/:id',
                element:<PrivateRoutes><CourseDetails></CourseDetails></PrivateRoutes>,
                loader:({params})=>fetch(`${url}/course/${params.id}`)
            },
            {
                path:'/courseenroll/:id',
                element:<PrivateRoutes><EnrollCourse></EnrollCourse></PrivateRoutes>,
                loader:({params})=>fetch(`${url}/course/${params.id}`)
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
                element:<PrivateRoutes><WelCome user={'User'}></WelCome></PrivateRoutes>
            },
            {
                path:'/dashboard/student/profile',
                element:<Profile></Profile>
            },{
                path:'/dashboard/student/gallary',
                element:<VideoGallery></VideoGallery>
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
                path:'/dashboard/admin/vedio',
                element:<VedioUpload></VedioUpload>
            },
            {
                path:'/dashboard/admin/updatecourse/:id',
                element:<UpdateCourse></UpdateCourse>,
                loader:({params})=>fetch(`${url}/course/${params.id}`)
            },
            {
                path:'/dashboard/admin/addconstructor',
                element:<AddConstructor></AddConstructor>
            },
            {
                path:'/dashboard/admin/updateinstructor/:id',
                element:<UpdateInstructor></UpdateInstructor>,
                loader:({params})=>fetch(`${url}/instructor/${params.id}`)
            },
            {
                path:'/dashboard/admin/showcourses',
                element:<ShowAllCourse></ShowAllCourse>
            },
            {
                path:'/dashboard/admin/showinstructors',
                element:<ShowAllInstructor></ShowAllInstructor>
            },
            {
                path:'/dashboard/admin/contactinfo',
                element:<ContactInfos></ContactInfos>
            },
            {
                path:'/dashboard/admin/allusers',
                element:<ShowAllUsers></ShowAllUsers>
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
                element:<Blogs></Blogs>
            }
        ]
    }
])

export default router;