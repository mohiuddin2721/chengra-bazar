import { Box, Grid } from '@mui/material';
import React from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BiMoney } from 'react-icons/bi';
import { BsArrowRightShort } from 'react-icons/bs';
import { FaFirstOrder } from 'react-icons/fa';
import { FcSalesPerformance } from 'react-icons/fc';
import DashboardColor from '../../assets/colors/DashboardColor';
import useAuth from '../../Hooks/useAuth';
import SatisfactionChart from '../dashboardChart/SatisfactionChart';
import Last7DaysSell from '../dashboardChart/Last7DaysSell';

const dashMiniCardData = [
    {
        name: "Today's Money",
        value: "$15,240",
        percent: 40,
        icon: <BiMoney />,
    },
    {
        name: "Total Users",
        value: "2015",
        percent: 4,
        icon: <AiOutlineUsergroupAdd />,
    },
    {
        name: "Total Sales",
        value: "45078",
        percent: 11,
        icon: <FcSalesPerformance />,
    },
    {
        name: "Today's Order",
        value: "245",
        percent: 13,
        icon: <FaFirstOrder />,
    },
]

export default function Dashboard() {
    const {user} =useAuth()
    const { background } = DashboardColor;

    return (
        <div className='text-white'>
            <section className='mb-8'>
                <Grid container spacing={2}>
                    {
                        dashMiniCardData?.map((data, index) =>
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
                                        <p className='text-xl font-bold'>
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
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
                        <Box sx={{
                            backgroundImage: "url('https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/cardimgfree.5771cbbb.png')",
                            padding: '40px', borderRadius: '20px',
                            maxHeight: '340px',
                            backgroundPosition: 'center',
                        }}
                        >
                            <div className='flex flex-col space-y-12'>
                                <div>
                                    <p>Welcome back,</p>
                                    <p className='text-2xl font-extrabold'>{user?.displayName}</p>
                                </div>
                                <div className='mt-6'>
                                    <p>Glad to see you again!</p>
                                    <p>Enjoy the work.</p>
                                </div>
                                <div className='mr-0 hover:mr-3'>
                                    <p>Tap to record <BsArrowRightShort className='inline-block text-2xl' /> </p>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3} lg={3}>
                        <Box sx={{
                            backgroundColor: background.main,
                            borderRadius: '20px',
                            maxWidth: '340px',
                            maxHeight: '340px',
                        }}>
                            <SatisfactionChart />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4.5} lg={4.5}>
                    <Box sx={{
                            backgroundColor: background.main,
                            borderRadius: '20px',
                            maxHeight: '340px',
                        }}>
                            <Last7DaysSell />
                        </Box>
                    </Grid>
                </Grid>
            </section>
            <section>
                <p>Chart</p>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <p></p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <p></p>
                    </Grid>
                </Grid>
            </section>
            <section>
                <p>Projects</p>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={8} lg={4}>
                        <p></p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={4}>
                        <p></p>
                    </Grid>
                </Grid>
            </section>
            <section>
                <p>chart 2nd</p>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={5} lg={5}>
                        <p></p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7}>
                        <p></p>
                    </Grid>
                </Grid>
            </section>
            <section>
                <p>Small footer</p>
            </section>
        </div>
    );
}