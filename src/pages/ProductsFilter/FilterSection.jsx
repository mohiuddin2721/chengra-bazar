import { LinearProgress } from '@mui/material';
import React from 'react';
import { AiTwotoneSetting } from 'react-icons/ai';

const FilterSection = ({ filterBgColor }) => {
    return (
        <div className={`${filterBgColor} rounded min-h-[100vh]`}>
            <p className='text-white text-center'>Filter section</p>
            <p className='text-center ml-2 text-white font-bold mr-2 text-xl'>
                settings
                <AiTwotoneSetting className='inline ml-1' />
            </p>
            <div className='w-[50%] mx-auto'>
                <LinearProgress
                    color="secondary"
                />
            </div>


        </div>
    );
};

export default FilterSection;