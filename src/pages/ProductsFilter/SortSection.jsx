import React, { useContext, useState } from 'react';
import { FaList, FaSearch } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { RiFilterLine } from 'react-icons/ri';
import { Drawer } from '@mui/material';
import FilterContent from '../../components/filterContent/FilterContent';
import SelectSortingPrice from '../../components/selectSortingPrice/SelectSortingPrice';
import { ProductFilterContext } from './ProductsFilter';

const SortSection = () => {
    const { filterBgColor, setIsOpenFilterDrawer, isOpenFilterDrawer } = useContext(ProductFilterContext)
    const [searchValue, setSearchValue] = useState("");
    const [selectedValue, setSelectedValue] = useState('Highest price');
    // console.log(selectedValue)

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
                    <div>
                        <input
                            onChange={getInputProductSearchingValue}
                            type="text"
                            placeholder='Search...'
                            className='w-full py-2 px-3 bg-white text-[#ce3cb8]'
                        />
                        <FaSearch className='absolute right-[23px] z-20 cursor-pointer top-[9px] font-bold text-lg' />
                    </div>
                </div>
                <div className='w-[30%] hidden md:flex justify-center items-center '>
                    <div className='flex items-center justify-center'>
                        <SelectSortingPrice
                            setSelectedValue={setSelectedValue}
                            selectedValue={selectedValue}
                        />
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
                        <FilterContent />
                    </Drawer>
                </>
            </div>
        </>
    );
};

export default SortSection;