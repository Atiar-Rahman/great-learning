import React from 'react';

const Category = ({ category }) => {
    console.log(category)
    const { category_image, category_title, course_No } = category;
    return (
        <div className="card bg-base-100 shadow-sm  hover:text-black hover:outline-amber-100 cursor-pointer">
            <figure className="px-10 pt-10">
                <img
                    src={category_image}
                    alt={category_title}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_title}</h2>
                <p>{course_No}</p>
            </div>
        </div>
    );
};

export default Category;