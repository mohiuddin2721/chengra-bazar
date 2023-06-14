import React from 'react';
import { FaList } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { RiFilterLine } from 'react-icons/ri';
import { Drawer } from '@mui/material';
import FilterContent from '../../components/filterContent/FilterContent';
import SelectSortingPrice from '../../components/selectSortingPrice/selectSortingPrice';

const SortSection = ({ filterBgColor, handleColor, setIsOpenFilterDrawer, isOpenFilterDrawer }) => {

    return (
        <>
            <div className={`flex ${filterBgColor} rounded min-h-[40px]`}>
                <div className='flex items-center w-[30%] text-white'>
                    <RiFilterLine
                        className='text-xl ml-2 cursor-pointer block md:hidden'
                        onClick={() => setIsOpenFilterDrawer(true)}
                    />
                    <BsFillGridFill className='mx-4' />
                    <FaList />
                </div>
                <div className='w-[30%] ml-2 flex justify-center items-center'>
                    <p className='text-center hidden md:flex text-white font-bold'>5 products</p>
                </div>
                <div className='w-[30%] flex justify-center items-center'>
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