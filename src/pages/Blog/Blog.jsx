import React from 'react';

const Blog = ({ blog }) => {
    const { question, answer } = blog;
    return (
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">{question}</div>
            <div className="collapse-content text-sm">{answer}</div>
        </div>
    );
};

export default Blog;