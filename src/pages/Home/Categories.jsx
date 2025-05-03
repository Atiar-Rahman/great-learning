import React, { useEffect, useState } from 'react'
import Category from './Category';
import axios from 'axios';
import url from '../../url';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {

        // fetch('https://great-learning-server-six.vercel.app/course')
        //     .then(res => res.json())
        //     .then(data => {
        //         setCategories(data)
        //         console.log(data)
        //     })

        axios.get(`${url}/course`)
        // axios.get('https://great-learning-server-six.vercel.app/course')
        .then(res=>{
            // console.log(res.data)
            setCategories(res.data)
        })

    }, [])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
            {
                categories.map(category => <Category key={category._id} category={category}></Category>)
            }
        </div>
    )
}

export default Categories;