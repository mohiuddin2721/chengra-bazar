import React from 'react';
import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material';
import { component_container } from '../../Styles/ComponentStyle';
import { categories } from '../../Utils/ConstantData';

const Categories = () => {
    return (
        <Box sx={component_container} className='mb-10'>
            <Typography sx={{m: 4}}>
                Catagories
            </Typography>
            <Grid container  spacing={1}>
                {
                    categories?.map((data, i) =>
                        <Grid item key={i} xs={3} sm={4} md={2} lg={2}>
                            <Card sx={{ maxWidth: '147px', maxHeight: '147px'}}>
                                <CardActionArea>
                                    <img src={data?.img}
                                        alt={data?.name}
                                        className='w-[90px] h-[90px] mx-auto'
                                        style={{ clipPath: 'circle(50%)' }}
                                    />
                                    <Typography className='text-[14px] text-center mt-0 pt-0 pb-2'>
                                        {data?.name}
                                    </Typography>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                }
            </Grid>

        </Box>
    );
};

export default Categories;