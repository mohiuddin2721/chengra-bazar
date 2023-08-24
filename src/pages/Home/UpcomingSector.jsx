import React from 'react';
import upcomingProduct from '../../assets/upcoming-1.jpg'
import { BsFillArrowDownRightCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const UpcomingSector = () => {
    const navigate = useNavigate()

    const upcomingProductFunction = () => {
        navigate("/upcoming_products")
    }

    return (
        <div style={{
            backgroundImage: `url(${upcomingProduct})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            height: "50vh",
            marginTop: '15px',
            marginBottom: '15px',
        }}
            className='flex justify-center align-middle items-center'
        >
            <div
                onClick={upcomingProductFunction}
                className='bg-[#e95de4b6] h-[50%] w-[80%] md:w-[70%] cursor-pointer rounded-sm'
            >
                <p
                    className='text-xl md:text-3xl text-white font-bold flex w-full h-full justify-center items-center'
                >
                    Our upcoming product - <BsFillArrowDownRightCircleFill className="text-white ml-1" />
                </p>
            </div>
        </div >
    );
};

export default UpcomingSector;