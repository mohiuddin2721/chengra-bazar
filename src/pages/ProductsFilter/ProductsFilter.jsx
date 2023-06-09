import React from 'react';
import FilterSection from './FilterSection';
import SortSection from './SortSection';
import ProductList from './ProductList';
import { Grid } from '@mui/material';

const ProductsFilter = () => {
    return (
        <div className='min-h-[100vh]'>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={3} lg={2} className='hidden md:block'>
                    <FilterSection />
                </Grid>
                <Grid item xs={12} sm={12} md={9} lg={10}>
                    <div>
                        <SortSection />
                    </div>
                    <div>
                        <ProductList />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProductsFilter;