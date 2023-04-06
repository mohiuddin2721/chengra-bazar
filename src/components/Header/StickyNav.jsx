import { Box, Tabs, Tab, MenuList, MenuItem } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import CategoriesStickyNav from './CategoriesStickyNav';
import BrandStickyNav from './BrandStickyNav';
import styles from '../../Styles/StickyNav.module.css';

const stickyNavBoxStyle = {
    width: '80%',
    mx: 'auto',
    '.css-1aquho2-MuiTabs-indicator': {
        backgroundColor: '#240838',
    },
}
const stickyNavTabStyle = {
    fontSize: '12px'
}

const StickyNav = () => {
    const [value, setValue] = useState(0);

    const [isFixed, setIsFixed] = useState(false);
    let navRef = useRef(null);
    // console.log(navRef)
    const [x, setX] = useState(0);
    useEffect(() => {
        if (navRef.current) {
            setX(navRef.current.getBoundingClientRect().top);
        }
    }, [navRef]);


    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                setIsFixed(window.scrollY > x);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [x]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={stickyNavBoxStyle} className={`${isFixed ? `${styles.myFixed}` : `${styles.mySticky}`} hidden lg:block duration-500 left-0 right-0 py-[10px]  z-30 bg-white border-b border-b-[#f4f4f4]`} ref={navRef}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <Box sx={{ display: 'flex', gap: 2, pb: 1 }}>
                    <CategoriesStickyNav />
                    <BrandStickyNav />
                </Box>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                    <Tab style={stickyNavTabStyle} label="Home" href="#" />
                    <Tab style={stickyNavTabStyle} label="Blogs" href="#" />
                    <Tab style={stickyNavTabStyle} label="About us" href="#" />
                    <Tab style={stickyNavTabStyle} label="Contact us" href="#" />
                </Tabs>
                <MenuList>
                    <MenuItem sx={{ fontSize: '12px', color: '#960000', fontWeight: '700' }}>Special offer</MenuItem>
                </MenuList>
            </Box>
        </Box>
    );
};

export default StickyNav;