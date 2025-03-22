import React, { useEffect, useState } from 'react'
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {

        fetch('http://localhost:3000/course')
            .then(res => res.json())
            .then(data => setCategories(data))

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