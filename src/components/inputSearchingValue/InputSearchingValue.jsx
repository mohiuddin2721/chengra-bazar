import React from 'react';
import { FaSearch } from 'react-icons/fa';

const InputSearchingValue = ({ getInputProductSearchingValue }) => {
    return (
        <>
            <input
                onChange={getInputProductSearchingValue}
                type="text"
                placeholder='Search...'
                className='w-full py-2 px-3 bg-white text-[#ce3cb8]'
            />
            <FaSearch className='absolute right-[23px] z-20 cursor-pointer top-[9px] font-bold text-lg' />
        </>
    );
};

export default InputSearchingValue;