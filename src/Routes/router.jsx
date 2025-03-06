import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound/NotFound';
import Blog from '../pages/Blog/Blog';
import Courses from '../pages/Courses/Courses';
import Contact from '../pages/Contact/Contact';
import AboutUs from '../pages/AboutUs/AboutUs';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>,
        errorElement: <NotFound></NotFound>,
        children:([
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>
            }
        ])
    },
    {
        path:'/blog',
        element:<Blog></Blog>,
        errorElement:<NotFound></NotFound>,
        children:([
            {
                path:'/blog',
            }
        ])
    }
])

export default router;