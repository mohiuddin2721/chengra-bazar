import React from 'react';
import { FaList } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { RiFilterLine } from 'react-icons/ri';

const SortSection = () => {

    return (
        <div className='flex'>
            {/* <p>Sort section</p> */}
            <div className='flex items-center w-[30%]'>
                <p className='flex items-center mx-2'>
                    <RiFilterLine />
                    Filter
                </p>
                <BsFillGridFill className='mr-2' />
                <FaList />
            </div>
            <div className='w-[30%]'>
                <p className='text-center'>5 products</p>
            </div>
            <div className='w-[30%]'>
                <div className='flex justify-center'>
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