import React, { useState, useEffect } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineUser, AiOutlineShopping } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import styles from '../../Styles/MiddleNav.module.css';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { Box, Collapse, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { categories } from '../../Utils/ConstantData';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useGetAllCategory from '../../Hooks/useGetAllCategories';
import useGetAllData from '../../Hooks/useGetAllData';
import SideCartProduct from './SideCartProduct';
import useCart from '../../Hooks/useCart';


const MiddleNav = () => {
    const { allCategory } = useGetAllCategory();
    const [isOpenMenuDrawer, setIsOpenMenuDrawer] = useState(false);
    const [isOpenCartDrawer, setIsOpenCartDrawer] = useState(false);
    const [openCollapseMenu1, setCollapseMenu1] = useState(false);
    const [openCollapseMenu2, setCollapseMenu2] = useState(false);
    const { allProduct } = useGetAllData();
    const [cart, refetch] = useCart()

    const getBrand = allProduct?.map((data) => data?.brand)
    const allBrand = Array.from(new Set(getBrand));
    // console.log(allBrand)

    const handleCollapseMenu1 = () => {
        setCollapseMenu1(!openCollapseMenu1);
    };
    const handleCollapseMenu2 = () => {
        setCollapseMenu2(!openCollapseMenu2);
    };

    const [openSearch, setOpenSearch] = useState(false);
    useEffect(() => {
        const hidePopUp = () => setOpenSearch(false);
        window.addEventListener('click', hidePopUp);
        return () => {
            window.removeEventListener('click', hidePopUp);
        };
    }, []);

    const handleDrawerClose1 = () => {
        setIsOpenMenuDrawer(false);
    };
    const handleDrawerClose2 = () => {
        setIsOpenCartDrawer(false);
    };

    return (
        <>
            <div className={`border-t  border-b lg:border-b-0 duration-500 z-20 bg-white left-0 right-0 border-[#E7E7E7]`}>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='px-[10px] flex  items-center gap-[40px]'>
                        <div className='flex items-center justify-between w-[300px] gap-3 xs:w-[200px] lg:w-[120px] h-[57px]'>
                            <div className='w-[15%] lg:hidden block'>
                                {/* <button onClick={onOpen1}> */}
                                <button onClick={() => setIsOpenMenuDrawer(true)}>
                                    <GiHamburgerMenu className='text-[#0088CC] font-bold text-2xl' />
                                </button>
                            </div>
                            {/* <img src={logo} alt="" className='w-[85%] lg:w-full h-full' /> */}
                            <Link to='/'>
                                <AiOutlineShoppingCart className='text-[35px]' />
                            </Link>
                        </div>
                        <div className='w-full flex gap-[30px] text-[13px] justify-end lg:justify-start  text-[#8d8d8d]'>
                            <div className='w-full h-[40px] hidden lg:flex items-center rounded-[50px] bg-[#f1f1f1]'>
                                <input placeholder='Search...' type="text" className='h-full w-[70%] outline-none px-[20px] py-[10px]  bg-transparent rounded-tl-[50px] rounded-bl-[50px]' />
                                <div className='font-normal flex items-center w-[23%] px-[14px] border-l border-r h-[40px] border-white'>
                                    <select name="" id="" className={`bg-transparent w-full cursor-pointer outline-none ${styles.select}`}>
                                        <option value="">select category</option>
                                        {
                                            allCategory?.map((item, i) => <option key={i} value="">{item.name}</option>)
                                        }
                                    </select>
                                </div>
                                <div className='w-[7%] h-[40px] flex justify-center items-center'>
                                    <BsSearch className='text-[#222529] text-lg cursor-pointer' />
                                </div>
                            </div>
                            <div className='hidden lg:flex items-center'>
                                <FiPhoneCall className='text-[30px] mr-[7px]' />
                                <div className='flex flex-col'>
                                    <span className='text-[11px] text-[#777] font-semibold'>CALL IS NOW</span>
                                    <span className='text-[16px] font-bold flex gap-1'><span>+016</span><span>8010</span>6149</span>
                                </div>
                            </div>
                            <div className='flex gap-3 sm:gap-5 text-2xl items-center'>
                                <div className='relative block lg:hidden'>
                                    {openSearch ? <MdOutlineClose onClick={(e) => {
                                        e.stopPropagation();
                                        setOpenSearch(false);

                                    }} className='text-[#222529] relative right-6 xs:right-0 hover:text-[#08c] duration-500  cursor-pointer' /> : <BsSearch onClick={(e) => {

                                        e.stopPropagation();
                                        setOpenSearch(true);
                                    }} className='text-[#222529] relative right-6 xs:right-0 hover:text-[#08c] duration-500  cursor-pointer' />}
                                    <div onClick={(e) => e.stopPropagation()} className={`w-[320px] xs:w-[360px]  xs:-left-[305px] -left-[289px] duration-500   text-[13px]  flex ${openSearch ? ' top-[45px] opacity-100  z-20' : 'opacity-0 top-[0px] -z-50'} absolute items-center h-[50px] rounded-[50px] bg-[#f1f1f1] border-[5px] border-[#08C]`}>
                                        <span className={`${styles['custom-arrow']} duration-500 right-[23px]`}></span>
                                        <input placeholder='Search...' type="text" className='h-full w-[45%] outline-none px-[20px] py-[10px]  bg-transparent rounded-tl-[50px] rounded-bl-[50px]' />
                                        <div className='font-normal flex items-center w-[43%] px-[14px] border-l border-r h-[40px] border-white'>
                                            <select name="" id="" className={`bg-transparent w-full cursor-pointer outline-none ${styles.select}`}>
                                                <option value="">select category</option>
                                                {
                                                    allCategory?.map((item, i) => <option key={i} value="">{item.name}</option>)
                                                }
                                            </select>
                                        </div>
                                        <div className='w-[12%] h-[40px] flex justify-center items-center'>
                                            <BsSearch className='text-[#222529] text-lg cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                                <AiOutlineUser className='text-[#222529] hidden lg:block' />
                                <FiHeart className='text-[#222529] hidden lg:block' />
                                <button
                                    className='relative'
                                    onClick={() => setIsOpenCartDrawer(true)}
                                >
                                    <AiOutlineShopping className='text-[#222529]' />
                                    <span className='absolute h-4 w-4 rounded-full bg-[#FF5B5B] z-1 text-white flex justify-center items-center text-[11px] -right-[7px] top-0'>{cart?.data?.length}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <>
                    <Drawer
                        anchor='right'
                        open={isOpenCartDrawer}
                    >
                        <Box style={{ fontFamily: "'Poppins', sans-serif" }} className={`py-[25px] px-[20px] overflow-y-auto ${styles.customScroll}`}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p className='mb-[17px] leading-10 font-bold text-[#212529] text-[20px]'>Shopping Cart</p>
                                <CloseOutlinedIcon
                                    className='text-black cursor-pointer text-right text-2xl'
                                    onClick={handleDrawerClose2} />
                            </Box>

                            {cart?.data?.map((item, i) => <SideCartProduct key={i} />)}
                            <div className='my-[15px] flex items-center justify-between text-[#212529] font-bold text-[13px]'>
                                <span>SUBTOTAL:</span>
                                <span className='text-[15px]'>$134.00</span>
                            </div>
                            <div className='mt-[10px] flex flex-col gap-[15px]'>
                                <button className='bg-[#e7e7e7] hover:bg-[#f1f1f1] duration-500 text-[12px] font-semibold py-[14px] leading-[16px] tracking-wide rounded-sm px-[25px]'>VIEW CART</button>
                                <button className='bg-[#222529] hover:bg-[#34393F] text-white duration-500 text-[12px] font-semibold py-[14px] leading-[16px] tracking-wide rounded-sm px-[25px]'>CHECKOUT</button>
                            </div>
                        </Box>
                    </Drawer>
                </>
            </div>
            <div>
                <>
                    <Drawer
                        anchor='left'
                        open={isOpenMenuDrawer}
                        sx={{
                            '.MuiBox-root': {
                                width: '300px'
                            },
                            '.css-4t3x6l-MuiPaper-root-MuiDrawer-paper': {
                                backgroundColor: '#240838'
                            }
                        }}
                    >
                        <Box style={{ fontFamily: "'Poppins', sans-serif", overflow: 'auto', backgroundColor: '#240838', color: 'white', maxWidth: '500px' }}>
                            <CloseOutlinedIcon sx={{ width: '100%', alignItems: 'end', mt: 2, fontSize: 35 }}
                                onClick={handleDrawerClose1} />
                            <div className='mt-[20px] mb-[30px]'>

                                <div>
                                    <List
                                        component="nav"
                                        aria-labelledby="nested-list-subheader"
                                    >
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="HOME" />
                                        </ListItemButton>
                                        <ListItemButton onClick={handleCollapseMenu1} sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="CATEGORIES" />
                                            {openCollapseMenu1 ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openCollapseMenu1} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {
                                                    categories?.map((item, i) =>
                                                        <ListItemButton key={i} sx={{ pl: 4, '&:hover': { borderBottom: '1px solid red' } }}>
                                                            <ListItemText primary={item.name} />
                                                        </ListItemButton>
                                                    )
                                                }
                                            </List>
                                        </Collapse>
                                        <ListItemButton onClick={handleCollapseMenu2} sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="BRANDS" />
                                            {openCollapseMenu2 ? <ExpandLess /> : <ExpandMore />}
                                        </ListItemButton>
                                        <Collapse in={openCollapseMenu2} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {
                                                    allBrand?.map((item, i) =>
                                                        <ListItemButton key={i} sx={{ pl: 4, '&:hover': { borderBottom: '1px solid red' } }}>
                                                            <ListItemText primary={item} />
                                                        </ListItemButton>
                                                    )
                                                }
                                            </List>
                                        </Collapse>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="SPECIAL OFFERS!" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="MY ACCOUNT" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="CART" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="Customer care" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="Track My Order" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ '&:hover': { borderBottom: '1px solid red' } }}>
                                            <ListItemText primary="LOG IN" />
                                        </ListItemButton>
                                    </List>
                                </div>
                                <div className='px-[15px] mb-[20px] relative'>
                                    <input type="text" placeholder='Search...' className='w-full py-2 px-3 bg-[#282E36] text-[#777777]' />
                                    <FaSearch className='absolute right-[23px] z-20 cursor-pointer top-[9px] font-bold text-lg' />
                                </div>
                                <div className='flex justify-center gap-[10px]'>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center hover:opacity-50 opacity-100 bg-[#3b5a9a] cursor-pointer duration-500'>
                                        <FaFacebookF />
                                    </div>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center hover:opacity-50 opacity-100 bg-[#1aa9e1] cursor-pointer duration-500'>
                                        <FaTwitter />
                                    </div>
                                    <div className='w-[32px] h-[32px] flex justify-center items-center hover:opacity-50 opacity-100 bg-[#7c4a3a] cursor-pointer duration-500'>
                                        <FaInstagram />
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Drawer>
                </>
            </div>
        </>
    )
}

export default MiddleNav;