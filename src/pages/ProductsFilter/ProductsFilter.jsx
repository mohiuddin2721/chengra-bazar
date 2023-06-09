import React from 'react';
import FilterSection from './FilterSection';
import SortSection from './SortSection';
import ProductList from './ProductList';
import { Box, Grid } from '@mui/material';
import { component_container } from '../../Styles/ComponentStyle';

const ProductsFilter = () => {
    return (
        <Box
            sx={component_container}
            className='min-h-[100vh]'
        >
            <Grid container spacing={1}>
                <Grid item xs={8} sm={8} md={3} lg={2} className='hidden md:block'>
                    <FilterSection
                        filterBgColor='bg-[#024160]'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={10}>
                    <div>
                        <SortSection
                            filterBgColor='bg-[#024160]'
                        />
                    </div>
                    <div>
                        <ProductList />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductsFilter;