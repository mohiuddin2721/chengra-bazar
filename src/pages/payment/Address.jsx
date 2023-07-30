import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';

const Address = ({ handleAddress, zip }) => {
    return (
        <div className='text-white w-full md:w-[60%] mx-auto block md:flex relative border-dashed hover:border-solid border-b-2 border-[#ffffffab] hover:border-green-400 rounded-lg p-8'>
            <div className='w-full md:w-2/4 p-2'>
                <p className='font-bold text-xl'>1. Shipping address:</p>
            </div>
            <div className='w-full md:w-2/4 p-2 text-sm font-sans'>
                <p className="font-bold mb-2">Talib Ali (01680106149)</p>
                <p className="text-white">talibalidhfkh@gmail.com</p>
                <p className="text-white">Chengra Bazar (Zip: 015420)</p>
                <p className="text-white">Bangladesh, Dhaka</p>
            </div>
            {
                !zip && <span
                    onClick={handleAddress}
                    className='absolute top-4 right-4 flex cursor-pointer text-green-500 hover:text-green-300 underline'>
                    update <BsFillPencilFill className='ml-2' />
                </span>
            }
        </div>
    );
};

export default Address;