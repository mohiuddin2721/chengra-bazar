import React, { useState } from 'react';
import FilterSection from './FilterSection';
import SortSection from './SortSection';
import ProductList from './ProductList';
import { Box, Grid } from '@mui/material';
import { component_container } from '../../Styles/ComponentStyle';

const ProductsFilter = () => {
    const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState(false);
    const [filterBgColor, setFilterBgColor] = useState('bg-[#024160]')

    const handleColor = (clr) => {
        setFilterBgColor(clr)
    }

    return (
        <Box
            sx={component_container}
            className='min-h-[100vh]'
        >
            <Grid container spacing={1}>
                <Grid item xs={8} sm={8} md={3} lg={2} className='hidden md:block'>
                    {/* left side products filter section */}
                    <FilterSection
                        handleColor={handleColor}
                        filterBgColor={filterBgColor}
                        setIsOpenFilterDrawer={setIsOpenFilterDrawer}
                        isOpenFilterDrawer={isOpenFilterDrawer}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={10}>
                    <div>
                        {/* product grid and list view, price sorting section */}
                        <SortSection
                            handleColor={handleColor}
                            filterBgColor={filterBgColor}
                            setIsOpenFilterDrawer={setIsOpenFilterDrawer}
                            isOpenFilterDrawer={isOpenFilterDrawer}
                        />
                    </div>
                    <div>
                        {/* all of filtering product appear here */}
                        <ProductList />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductsFilter;