import { Box, Tabs, Tab, Popper, Grow, Paper, ClickAwayListener, MenuList, MenuItem } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'rsuite';
import CategoriesStickyNav from './CategoriesStickyNav';

const stickyNavBoxStyle = {
    width: '80%',
    mx: 'auto',
    '.css-1aquho2-MuiTabs-indicator': {
        backgroundColor: '#240838',
    },
}
const stickyNavTabStyle = {
    fontSize: '10px',
    fontWeight: 700,
}

const StickyNav = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={stickyNavBoxStyle}>
            <Box>
                <Box>
                    <CategoriesStickyNav />
                </Box>

                <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                    <Tab sx={stickyNavTabStyle} label="Categories" href="#" />
                    <Tab sx={stickyNavTabStyle} label="Brand" href="#" />
                    <Tab sx={stickyNavTabStyle} label="Home" href="#" />
                    <Tab sx={stickyNavTabStyle} label="Blogs" href="#" />
                    <Tab sx={stickyNavTabStyle} label="About us" href="#" />
                    <Tab sx={stickyNavTabStyle} label="Contact us" href="#" />
                </Tabs>
            </Box>
        </Box>
    );
};

export default StickyNav;