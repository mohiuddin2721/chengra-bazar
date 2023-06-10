import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Box, Collapse, List, ListItemButton, ListItemText, Rating, Slider } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FilterBgColor from '../filterBgColor/FilterBgColor';
import useGetAllCategory from '../../Hooks/useGetAllCategories';
import { brands } from '../../Utils/ConstantData';

const FilterContent = ({ filterBgColor, handleColor, setIsOpenFilterDrawer }) => {
    const { allCategory } = useGetAllCategory()
    const [openCollapseFilter1, setCollapseFilter1] = useState(true);
    const [openCollapseFilter2, setCollapseFilter2] = useState(false);
    const [value, setValue] = useState(3);
    // console.log(value)

    const handleCollapseMenu1 = () => {
        setCollapseFilter1(!openCollapseFilter1);
    };
    const handleCollapseMenu2 = () => {
        setCollapseFilter2(!openCollapseFilter2);
    };
    const handleDrawerClose1 = () => {
        setIsOpenFilterDrawer(false);
    };

    return (
        <Box
            className={`${filterBgColor}`}
            style={{
                fontFamily: "'Poppins', sans-serif",
                overflow: 'auto',
                color: 'white',
                maxWidth: '500px'
            }}
        >
            <AiOutlineClose
                className='w-full justify-normal text-white mt-2 text-4xl font-semibold md:hidden block'
                onClick={handleDrawerClose1}
            />
            <div className='mt-[20px] mb-[30px]'>
                <div className='px-[15px] mb-[20px] relative'>
                    <input type="text" placeholder='Search...' className='w-full py-2 px-3 bg-[#282E36] text-[#777777]' />
                    <FaSearch className='absolute right-[23px] z-20 cursor-pointer top-[9px] font-bold text-lg' />
                </div>
                <div>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                    >
                        <ListItemButton onClick={handleCollapseMenu1} sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                            <ListItemText primary="CATEGORIES" />
                            {openCollapseFilter1 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openCollapseFilter1} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    allCategory?.map((item, i) =>
                                        <ListItemButton key={i} sx={{ pl: 4, '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary={item.name} />
                                        </ListItemButton>
                                    )
                                }
                            </List>
                        </Collapse>
                        <ListItemButton onClick={handleCollapseMenu2} sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                            <ListItemText primary="BRANDS" />
                            {openCollapseFilter2 ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openCollapseFilter2} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    brands?.map((item, i) =>
                                        <ListItemButton key={i} sx={{ pl: 4, '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary={item} />
                                        </ListItemButton>
                                    )
                                }
                            </List>
                        </Collapse>
                    </List>
                    <div className='my-2'>
                        <p className='text-center'>Filter by price</p>
                        <div className='w-[90%] flex mx-auto justify-center mt-2'>
                            <Slider
                                defaultValue={5000}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                                min={300}
                                max={10000}
                            />
                        </div>
                    </div>
                    <div className='my-2'>
                        <p className='text-center'>Filter by rating</p>
                        <div className='w-full flex justify-center mt-2'>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <FilterBgColor handleColor={handleColor} />
            </div>
        </Box>
    );
};

export default FilterContent;