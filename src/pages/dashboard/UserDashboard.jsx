import { Box, Grid } from '@mui/material';
import React from 'react';
import { userDashMiniCardData } from '../../Utils/ConstantData';

const UserDashboard = () => {
    return (
        <div>
            <section>
                <Grid container spacing={2}>
                    {
                        userDashMiniCardData?.map((data, index) =>
                            <Grid key={index} item xs={12} sm={12} md={3} lg={3}>
                                <Box
                                    sx={{
                                        backgroundColor: '#0c0e29',
                                        display: 'flex', padding: '20px',
                                        justifyContent: 'space-between',
                                        borderRadius: '20px'
                                    }}>
                                    <div>
                                        <p className='text-xs text-gray-400'>
                                            {data?.name}
                                        </p>
                                        <p className='text-xl text-white font-bold'>
                                            {data?.value}
                                            <span className='text-green-500 text-sm ml-2'>{data?.percent}%</span>
                                        </p>
                                    </div>
                                    <div>
                                        <div className='w-12 h-12 rounded-[10px] bg-[#0075ff]'>
                                            <i className='text-white text-2xl flex justify-center items-center h-full'>{data?.icon}</i>
                                        </div>
                                    </div>
                                </Box>
                            </Grid>
                        )
                    }
                </Grid>
            </section>
            <section>

            </section>
        </div>
    );
};

export default UserDashboard;