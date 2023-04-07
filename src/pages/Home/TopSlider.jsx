import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { topSliderNewArrivalData } from '../../Utils/TopSliderNewArrivalData';

const bannerPic = [
    { id: 1, pic: 'https://as1.ftcdn.net/v2/jpg/01/91/82/44/1000_F_191824469_CJFxbuGqEJCnDRK83N97i17R7oEUJtEM.jpg' },
    { id: 2, pic: 'https://as1.ftcdn.net/v2/jpg/02/19/10/12/1000_F_219101232_9gYB191gBUCxTSE455FUkmQB1MioqtVp.jpg' },
    { id: 3, pic: 'https://as1.ftcdn.net/v2/jpg/01/23/12/38/1000_F_123123866_EGxIsP6jRf1hLP56OHDUWHHyJF2Kkhfp.jpg' },
    { id: 4, pic: 'https://as1.ftcdn.net/v2/jpg/01/52/61/36/1000_F_152613619_kaNluqI3oUjvIhEQDcDfuksXknNJ45lf.jpg' },
    { id: 5, pic: 'https://as1.ftcdn.net/v2/jpg/02/21/01/52/1000_F_221015223_JFpTeUN84cxi2SED9Ug9snZlifE0und4.jpg' },
    { id: 6, pic: 'https://as2.ftcdn.net/v2/jpg/01/38/53/99/1000_F_138539919_c8vb5eC9112n4kxLBB4pU4ez6NC6G77i.jpg' },
    { id: 7, pic: 'https://as2.ftcdn.net/v2/jpg/01/41/03/45/1000_F_141034518_wXdy3QxcL9vA1H5VY6Jl5PTNul4YLsE7.jpg' },
]

function TopSlider() {
    return (
        <Box sx={{
            width: {
                xs: '98%',
                sm: '98%',
                md: '90%',
                lg: '90%',
            },
            mx: 'auto',
            }}>
            <Grid container spacing={2} sx={{ height: '80vh' }}>
                <Grid item xs={12} sm={12} md={6}>

                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Grid container  rowSpacing={{ xs: 0, sm: 0, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                        {
                            topSliderNewArrivalData?.map((data, i) =>
                                <Grid item xs={6}>
                                    <Box sx={{
                                        // position: 'relative',
                                        height: {
                                            xs: '150px',
                                            sm: '150px',
                                            md: '200px',
                                        },
                                    }}
                                    >
                                        <img src={data?.imageLink} className='rounded-md' alt="" />

                                        {/* <Typography sx={{ position: 'absolute', top: 20, left: 20 }}>
                                            {'data?.title'}
                                        </Typography> */}
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