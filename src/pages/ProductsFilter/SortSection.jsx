import React from 'react';
import { FaList } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { RiFilterLine } from 'react-icons/ri';

const SortSection = ({ filterBgColor }) => {

    return (
        <div className={`flex ${filterBgColor} rounded min-h-[40px]`}>
            {/* <p>Sort section</p> */}
            <div className='flex items-center w-[30%] text-white'>
                <p className='flex items-center mx-2'>
                    <RiFilterLine />
                    Filter
                </p>
                <BsFillGridFill className='mr-2' />
                <FaList />
            </div>
            <div className='w-[30%] flex justify-center items-center'>
                <p className='text-center text-white font-bold'>5 products</p>
            </div>
            <div className='w-[30%] flex justify-center items-center'>
                <div className='flex items-center justify-center'>
                    <select name="" id="">
                        <option>price(lowest)</option>
                        <option>price(highest)</option>
                        <option>price-(a-z)</option>
                        <option>price-(z-a)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default SortSection;