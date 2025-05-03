import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import url from '../../url';

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch(`${url}/pythonbasic`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBlogs(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-3xl text-center border-b-4 border-amber-400  rounded-2xl'>Some Basic Question and Answer</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {
                blogs.map((blog,index)=><Blog key={index} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

export default Blogs;