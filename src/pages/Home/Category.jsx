import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

const Category = ({ category }) => {
    // console.log(category)
    const {_id, file, title, rating } = category;
    return (
        <Link to={`course/${_id}`}>
            <div className="card bg-base-100 shadow-sm  hover:text-black hover:outline-amber-100 cursor-pointer">
                <figure className="px-10 pt-10">
                    <img
                        src={file}
                        alt={title}
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p><StarRating rating={rating}></StarRating></p>
                </div>
            </div>
        </Link>
    );
};

export default Category;