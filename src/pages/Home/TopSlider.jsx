import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { topSliderNewArrivalData } from '../../Utils/TopSliderNewArrivalData';
import Banner from '../../components/Banner/Banner';

function TopSlider() {
    return (
        <Box 
        style={{marginTop: '20px'}}
        sx={{
            width: {
                xs: '98%',
                sm: '98%',
                md: '90%',
                lg: '90%',
            },
            mx: 'auto',
        }}>
            <Grid container
                rowSpacing={{ xs: 1, sm: 0, md: 3 }}
                columnSpacing={{ xs: 0, sm: 0, md: 2 }}
                sx={{ height: '80vh' }}
            >
                <Grid item xs={12} sm={12} md={6} sx={{pt: 40}}>
                    <Banner />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container
                        rowSpacing={{ xs: 1, sm: 0, md: 3 }}
                        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                    >
                        {
                            topSliderNewArrivalData?.map((data, i) =>
                                <Grid item xs={6}>
                                    <Box sx={{
                                        position: 'relative',
                                        height: {
                                            xs: '150px',
                                            sm: '150px',
                                            md: '200px',
                                        },
                                    }}
                                    >
                                        <img src={data?.imageLink} className='rounded-md' alt="" />
                                        <Typography sx={{ position: 'absolute', top: 20, left: 20, color: 'red' }}>
                                            {data?.title}
                                        </Typography>
                                        <Typography sx={{ position: 'absolute', top: 90, left: 20, fontSize: '25px', fontWeight: 700 }}>
                                            {data?.name}
                                        </Typography>
                                        <Typography sx={{ position: 'absolute', top: 170, left: 20, fontWeight: 400 }}>
                                            {data?.price}
                                        </Typography>
                                    </Box>
                                </Grid>
                            )
                        }

                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TopSlider