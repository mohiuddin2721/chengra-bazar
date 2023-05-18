import { Box, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { component_container } from '../../Styles/ComponentStyle';

const SelectedCategories = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <Box sx={component_container} className='my-10 mx-auto'>
            <Grid container spacing={.5}>
                <Grid item xs={12} sm={6} md={8}>

                </Grid>
                <Grid item xs={12} sm={6} md={4}>

                </Grid>
            </Grid>
        </Box>
    );
};

export default SelectedCategories;