import { Avatar, Box, Grid } from '@mui/material';
import React from 'react';
import { userDashMiniCardData } from '../../Utils/ConstantData';
import useAuth from '../../Hooks/useAuth';
import UserDashChart from './UserDashChart';

const UserDashboard = () => {
    const { user } = useAuth();
    // console.log(user)
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
            <section className='mt-[50px]'>
                <div className="flex flex-wrap">
                    <div className="w-[96%] md:w-[30%] mx-auto p-2 bg-[#260c29] h-[250px] rounded-md">
                        <Box className='flex justify-center items-center h-full'>
                            <Box>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={user?.photoURL}
                                    sx={{
                                        width: 150,
                                        height: 150,
                                    }}
                                />
                                <p className='text-white text-center pt-2 font-bold'>{user?.displayName}</p>
                            </Box>
                        </Box>
                    </div>
                    <div className="w-[96%] md:w-[40%] bg-[#0c0e29] rounded-md mx-auto p-2">
                        <div className='h-full flex justify-center items-center'>
                            <div>
                                <div>
                                    <p className='text-xl text-white font-bold mb-4'>Your activities</p>
                                </div>
                                <div className='text-white text-center'>
                                    <p>Orders: 3</p>
                                    <p>Payments: 4</p>
                                    <p>Reviews: 2</p>
                                    <p>Whitelist: 7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[96%] md:w-[30%] bg-[#260c29]  mx-auto p-2 rounded-md h-auto">
                        <div className='h-full'>
                            <UserDashChart />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserDashboard;