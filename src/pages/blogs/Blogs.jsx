import React from 'react';
import BlogCard from './BlogCard';
import '../../Styles/Blogs.css'

const blogs = [
    {
        id: 1,
        title: 'Blog Post 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'John Doe',
        imageUrl: 'image1.jpg',
        authorImage: 'author1.jpg'
    },
    {
        id: 2,
        title: 'Blog Post 2',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        author: 'Jane Smith',
        imageUrl: 'image2.jpg',
        authorImage: 'author2.jpg'
    },
    // Add more blog objects as needed
];
const Blogs = () => {
    return (
        <div className="bg-black min-h-screen py-8 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap -mx-4">
                    {blogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;