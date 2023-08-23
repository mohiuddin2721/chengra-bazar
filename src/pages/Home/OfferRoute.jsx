import React from 'react';
import offerBG from '../../assets/offerBG-1.jpg'
import { Grid } from '@mui/material';
import SingleData from '../../components/ReceivAllData/SingleData';
import useGetAllData from '../../Hooks/useGetAllData';
import Loader from '../../components/Loader/Loader';
import { useState } from 'react';

const OfferRoute = () => {
    const { allProduct, isLoading } = useGetAllData()
    const [offerHeadline, setOfferHeadline] = useState("Products 1-30% off")
    // console.log(allProduct)

    if (isLoading) {
        return <Loader />
    }

    const oneToThirty = (data) => {
        setOfferHeadline(data)
    }
    const thirty_oneToForty = (data) => {
        setOfferHeadline(data)
    }
    const fortyOneToFifty = (data) => {
        setOfferHeadline(data)
    }
    const fiftyOneToSixty = (data) => {
        setOfferHeadline(data)
    }
    const sixtyOneToSeventy = (data) => {
        setOfferHeadline(data)
    }

    return (
        <div className='min-h-[100vh]'>
            <div className='relative'>
                <img className='w-full h-[45vh]' src={offerBG} alt="" />
                <span className='absolute top-[45%] right-[40%]'>
                    <p className='text-4xl text-white font-bold'>Special offers for you</p>
                </span>
            </div>
            <div className='flex w-full justify-center text-white'>
                <div className='rounded-sm'>
                    <button
                        onClick={() => oneToThirty('Products 1-30% off')}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>1-30% off</button>
                </div>
                <div className='rounded-sm'>
                    <button
                        onClick={() => thirty_oneToForty('Products 31-40% off')}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>31-40% off</button>
                </div>
                <div className='rounded-sm'>
                    <button
                        onClick={() => fortyOneToFifty('Products 41-50% off')}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>41-50% off</button>
                </div>
                <div className='rounded-sm'>
                    <button
                        onClick={() => fiftyOneToSixty('Products 51-60% off')}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>51-60% off</button>
                </div>
                <div className='rounded-sm'>
                    <button
                        onClick={() => sixtyOneToSeventy('Products 61-70% off')}
                        className='w-full bg-green-500 hover:bg-green-700 py-1 px-3 border-solid border-2 border-white'>61-70% off</button>
                </div>
            </div>
            <div>
                <div className='flex justify-center my-[10px]'>
                    <p className='bg-[#378ebd50] py-1 px-3 rounded-sm'>{offerHeadline}</p>
                </div>
                <div className='my-[30px] w-full md:w-[90%] mx-auto'>
                    <Grid container spacing={1}>
                        {
                            allProduct?.map(item =>
                                <SingleData
                                    key={item._id}
                                    item={item}
                                    xs={6}
                                    sm={6}
                                    md={3}
                                    lg={3}
                                />
                            )
                        }
                    </Grid>
                </div>
            </div>
        </div>
    );
};

export default OfferRoute;