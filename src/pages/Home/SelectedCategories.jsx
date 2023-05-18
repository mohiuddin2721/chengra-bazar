import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { component_container } from '../../Styles/ComponentStyle';
import useGetAllData from '../../Hooks/useGetAllData';
import SingleData from '../../components/ReceivAllData/SingleData';
import useGetAllCategory from '../../Hooks/useGetAllCategories';

const SelectedCategories = () => {
    const { allProduct } = useGetAllData()
    const { allCategory } = useGetAllCategory();
    const { id } = useParams();

    const filteredCategory = allProduct?.filter(item => item?.categories == id)

    return (
        <Box sx={component_container} className='my-10 mx-auto'>
            <Grid container spacing={.5}>
                <Grid item xs={12} sm={6} md={10}>
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
                <Grid item xs={12} sm={12} md={2}>
                    <Box>
                        <Typography sx={{ mb: 4, textAlign: 'center' }}>
                            Others Catagories
                        </Typography>
                        {
                            allCategory?.map(data =>
                                <Link key={data._id} to={`/catagories/${data?.name}`}>
                                    <Card sx={{ maxWidth: '147px', maxHeight: '147px' }} className='mb-4 mx-auto'>
                                        <CardActionArea>
                                            <img src={data?.photo}
                                                alt={data?.name}
                                                className='w-[90px] h-[90px] mx-auto'
                                                style={{ clipPath: 'circle(50%)' }}
                                            />
                                            <Typography className='text-[14px] text-center mt-0 pt-0 pb-2'>
                                                {data?.name}
                                            </Typography>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            )
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SelectedCategories;