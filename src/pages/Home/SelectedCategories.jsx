import { Box, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { component_container } from '../../Styles/ComponentStyle';
import useGetAllData from '../../Hooks/useGetAllData';
import SingleData from '../../components/ReceivAllData/SingleData';

const SelectedCategories = () => {
    const { allProduct } = useGetAllData()
    const { id } = useParams();

    const filteredCategory = allProduct?.filter(item => item?.categories == id)

    return (
        <Box sx={component_container} className='my-10 mx-auto'>
            <Grid container spacing={.5}>
                <Grid item xs={12} sm={6} md={10}>
                    {/* <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas eum esse id cumque magnam ex rem sit quod sint ipsam.</h1> */}
                    <Grid container spacing={.5}>

                        {
                            filteredCategory?.map(item =>
                                <SingleData
                                    key={item?._id}
                                    item={item}
                                    xs={6}
                                    sm={6}
                                    md={3}
                                />)
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={2}>
                    <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas eum esse id cumque magnam ex rem sit quod sint ipsam.</h1>

                </Grid>
            </Grid>
        </Box>
    );
};

export default SelectedCategories;