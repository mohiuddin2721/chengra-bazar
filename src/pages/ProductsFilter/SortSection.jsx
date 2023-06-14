import React, { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { RiFilterLine } from 'react-icons/ri';
import { Drawer } from '@mui/material';
import FilterContent from '../../components/filterContent/FilterContent';
import SelectSortingPrice from '../../components/selectSortingPrice/selectSortingPrice';
import InputSearchingValue from '../../components/inputSearchingValue/InputSearchingValue';

const SortSection = ({ filterBgColor, handleColor, setIsOpenFilterDrawer, isOpenFilterDrawer }) => {
    const [searchValue, setSearchValue] = useState("");
    // console.log(searchValue)

    const getInputProductSearchingValue = (e) => {
        const inputValue = e.target.value;
        setSearchValue(inputValue)
    }
    return (
        <>
            <div className={`flex ${filterBgColor} rounded min-h-[40px]`}>
                <div className='flex items-center w-[30%] text-white'>
                    <RiFilterLine
                        className='text-xl ml-2 cursor-pointer block md:hidden'
                        onClick={() => setIsOpenFilterDrawer(true)}
                    />
                    <BsFillGridFill className='mx-4 cursor-pointer' />
                    <FaList className='cursor-pointer' />
                </div>
                <div className='w-full lg:w-[40%] px-[15px] my-2 block relative'>
                    <InputSearchingValue getInputProductSearchingValue={getInputProductSearchingValue} />
                </div>
                <div className='w-[30%] hidden md:flex justify-center items-center '>
                    <div className='flex items-center justify-center'>
                        <SelectSortingPrice />
                    </div>
                </div>
            </div>
            <div>
                <>
                    <Drawer
                        anchor='right'
                        open={isOpenFilterDrawer}
                        sx={{
                            '.MuiBox-root': {
                                width: '300px',
                                minHeight: '100vh'
                            },
                            '.css-4t3x6l-MuiPaper-root-MuiDrawer-paper': {
                                backgroundColor: '#240838',
                            }
                        }}
                    >
                        <FilterContent
                            filterBgColor={filterBgColor}
                            handleColor={handleColor}
                            setIsOpenFilterDrawer={setIsOpenFilterDrawer}
                            isOpenFilterDrawer={isOpenFilterDrawer}
                        />
                    </Drawer>
                </>
            </div>
        </>
    );
};

export default SortSection;