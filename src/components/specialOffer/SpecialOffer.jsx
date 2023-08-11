import React from 'react';
import { Link } from 'react-router-dom';

const SpecialOffer = () => {
    return (
        <div className='min-h-[70vh]'>
            <div className='flex justify-center items-center align-middle h-[40vh]'>
                <div>
                    <p className='text-[#d409a8] font-bold'>No special offer today. Stay with us</p>
                    <Link to='/' className='text-green-500 underline'>back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;