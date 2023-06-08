import React from 'react';
import '../../Styles/Blogs.css'

const BlogCard = ({ blog }) => {
    return (
        <div className="w-full md:w-60 md:mr-4 mb-4 md:mb-0">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <img src={blog.imageUrl} alt="Blog" className="w-full mb-4" />
                <div className="flex items-center mb-4">
                    <img src={blog.authorImage} alt="Author" className="w-10 h-10 rounded-full mr-2" />
                    <span className="font-bold">{blog.author}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                <p>{blog.content}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default BlogCard;