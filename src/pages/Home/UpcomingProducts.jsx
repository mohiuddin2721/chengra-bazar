import React from 'react';
import upcomingProduct from '../../assets/upcoming-1.jpg'

const UpcomingProducts = () => {

    return (
        <div className='min-h-[100vh]'>
            <div className='w-full md:w-[90%] mx-auto'>
                <img className='w-full' src={upcomingProduct} alt="" />
            </div>
        </div>
    );
};

export default UpcomingProducts;