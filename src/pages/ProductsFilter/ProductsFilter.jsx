import React, { createContext, useState } from 'react';
import FilterSection from './FilterSection';
import SortSection from './SortSection';
import ProductList from './ProductList';
import { Box, Grid } from '@mui/material';
import { component_container } from '../../Styles/ComponentStyle';

export const ProductFilterContext = createContext()

const ProductsFilter = () => {
    const [isOpenFilterDrawer, setIsOpenFilterDrawer] = useState(false);
    const [filterBgColor, setFilterBgColor] = useState('bg-[#024160]');
    const [searchValue, setSearchValue] = useState("");
    const [selectedValue, setSelectedValue] = useState('Highest price');
    const [checkedCategory, setCheckedCategory] = useState([]);
    const [checkedBrand, setCheckedBrand] = useState([]);
    const [priceSlideValue, setPriceSlideValue] = useState([1000, 2000]);
    const [rattingValue, setRattingValue] = useState(3);
    // console.log(selectedValue)

    const handleColor = (clr) => {
        setFilterBgColor(clr)
    }

    const filterFunction = {
        filterBgColor,
        handleColor,
        isOpenFilterDrawer,
        setIsOpenFilterDrawer,
        setSearchValue,
        selectedValue,
        setSelectedValue,
        checkedCategory,
        setCheckedCategory,
        checkedBrand,
        setCheckedBrand,
        priceSlideValue,
        setPriceSlideValue,
        rattingValue,
        setRattingValue,
    }

    return (
        <ProductFilterContext.Provider value={filterFunction}>
            <Box
                sx={component_container}
                className='min-h-[100vh]'
            >
                <Grid container spacing={1}>
                    <Grid item xs={8} sm={8} md={3} lg={2} className='hidden md:block'>
                        {/* left side products filter section */}
                        <FilterSection />
                    </Grid>
                    <Grid item xs={12} sm={12} md={9} lg={10}>
                        <div>
                            {/* product grid and list view, price sorting section */}
                            <SortSection />
                        </div>
                        <div>
                            {/* all of filtering product appear here */}
                            <ProductList />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </ProductFilterContext.Provider>
    );
};

export default ProductsFilter;