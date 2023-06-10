import { Collapse, LinearProgress } from '@mui/material';
import React, { useState } from 'react';
import { AiFillHeart, AiTwotoneSetting } from 'react-icons/ai';
import { filterSectionBgColor } from '../../Utils/ConstantData';

const FilterSection = ({ filterBgColor, handleColor }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={`${filterBgColor} rounded min-h-[100vh]`}>
            <p className='text-white text-center'>Filter section</p>
            <p
                onClick={handleClick}
                className='text-center ml-2 text-white font-bold mr-2 text-xl cursor-pointer'>
                color
                <AiTwotoneSetting className='inline ml-1' />
            </p>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <div className='flex w-[60%] mx-auto my-4'>
                    {
                        filterSectionBgColor?.map((data, index) =>
                            <AiFillHeart key={index}
                                onMouseOver={() => handleColor(data.bgColor)}
                                className={`text-2xl ${data.colorName} cursor-pointer`} />
                        )
                    }
                </div>
            </Collapse>
            <div className='w-[50%] mx-auto'>
                <LinearProgress />
            </div>
        </div>
    );
};

export default FilterSection;