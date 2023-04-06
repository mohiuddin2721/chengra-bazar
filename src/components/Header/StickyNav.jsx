import { Box, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';

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
    const [openCollapseMenu1, setCollapseMenu1] = useState(false);
    const [openCollapseMenu2, setCollapseMenu2] = useState(false);

    const handleCollapseMenu1 = () => {
        setCollapseMenu1(!openCollapseMenu1);
    };
    const handleCollapseMenu2 = () => {
        setCollapseMenu2(!openCollapseMenu2);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
// onmouseover
    return (
        <Box sx={stickyNavBoxStyle}>
            <Box>


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