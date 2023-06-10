import React, { useState } from 'react';
import { FaList, FaSearch } from 'react-icons/fa';
import { BsFillGridFill } from 'react-icons/bs';
import { RiFilterLine } from 'react-icons/ri';
import { Box, Collapse, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { brands } from '../../Utils/ConstantData';
import useGetAllCategory from '../../Hooks/useGetAllCategories';
import FilterBgColor from '../../components/filterBgColor/FilterBgColor';
import FilterContent from '../../components/filterContent/FilterContent';

const SortSection = ({ filterBgColor, handleColor, setIsOpenFilterDrawer, isOpenFilterDrawer }) => {
    const { allCategory } = useGetAllCategory()
    const [openCollapseFilter1, setCollapseFilter1] = useState(true);
    const [openCollapseFilter2, setCollapseFilter2] = useState(false);

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
                        {/* <Box
                            className={`${filterBgColor}`}
                            style={{
                                fontFamily: "'Poppins', sans-serif",
                                overflow: 'auto',
                                color: 'white',
                                maxWidth: '500px'
                            }}
                        >
                            <CloseOutlinedIcon sx={{ width: '100%', alignItems: 'end', mt: 2, fontSize: 35 }}
                                onClick={handleDrawerClose1} />
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
                                </div>
                                <FilterBgColor handleColor={handleColor} />
                            </div>
                        </Box> */}
                    </Drawer>
                </>
            </div>
        </>
    );
};

export default SortSection;