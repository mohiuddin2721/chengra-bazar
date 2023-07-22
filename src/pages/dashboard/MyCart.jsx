import React, { useState } from 'react';
import { CardContent, Grid, IconButton } from '@mui/material';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { glassStyle_1, glassStyle_2 } from '../../Styles/DashboardStyle';

const MyCart = ({ item, quantity }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [quantityOrder, setQuantityOrder] = useState(1)

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div>
            <p className='text-white text-xl'>Shopping Cart</p>
            <hr />
            <Grid
                container
                sx={{ marginTop: '10px' }}
                spacing={1}>
                <Grid item xs={12} sm={12} md={8} lg={9}>
                    <Grid
                        style={isHovered ? glassStyle_1 : glassStyle_2}
                        sx={{ borderBottom: '1px solid white', borderRadius: '10px' }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        container
                        spacing={1}
                    >
                        <Grid item xs={12} sm={12} md={5} lg={4}>
                            <div className='w-[80%] mx-auto mb-1'>
                                <img
                                    className='w-full'
                                    src="http://localhost:5000/images\1689800255458-492146721-shirt01.webp"
                                    // src={`http://localhost:5000/${firstImg}`}
                                    alt=""
                                    style={{
                                        border: '5px outset #ffff',
                                        borderRadius: isHovered ? '0px 40px 0px 40px' : '40px 0px 40px 0px',
                                        transition: 'border-radius 0.3s ease-in-out',
                                    }}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} lg={8}>
                            <CardContent sx={{ paddingLeft: 4, color: '#ffff' }}>
                                <p className='font-bold pt-2'>Name: {item?.name}Cotton Casual Shirt</p>
                                <p className='text-xs text-green-300 pb-2'>{item?.name}in-stock</p>
                                <p className='text-sm flex pb-2'>
                                    Price: <span className='text-green-300 font-bold ml-2'>${item?.price}1240</span>
                                    <BiPlus className='text-xl mx-2' />
                                    Shifting cost: <span className='text-green-300 font-bold ml-2'>${item?.shifting}20</span>
                                </p>
                                <p className='text-green-300 text-2xl font-bold mb-2'> $ 1260 </p>
                                <p className='text-xs'>Brand: {item?.brand}Ss World</p>
                                <div className='my-2'>
                                    <p className='flex'>
                                        Quantity:
                                        <span>
                                            <button
                                                onClick={() => setQuantityOrder(quantityOrder - 1)}
                                                className={`ml-4 cursor-pointer text-2xl ${quantityOrder <= 1 ? 'text-gray-400' : 'text-white'}`}
                                                disabled={quantityOrder <= 1}
                                            >
                                                <BiMinus />
                                            </button>
                                        </span>
                                        <span className='mx-2'>
                                            {quantityOrder}
                                        </span>
                                        <span>
                                            <button
                                                onClick={() => setQuantityOrder(quantityOrder + 1)}
                                                className={`ml-1 cursor-pointer text-2xl ${quantityOrder >= quantity ? 'text-gray-400' : 'text-white'}`}
                                                disabled={quantityOrder >= quantity}
                                            >
                                                <BiPlus />
                                            </button>
                                        </span>
                                    </p>
                                    <p className='cursor-pointer text-white font-bold ml-4'>| <span className='text-green-400 hover:text-green-600 mx-2'>Delete</span> |</p>
                                </div>
                                {/* <div className='flex justify-around'>
                                    <button className="ml-4 text-white font-bold bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                                        Purchase
                                    </button>
                                </div> */}
                            </CardContent>
                        </Grid>
                    </Grid>
                    {/* <hr className='my-2' /> */}
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={3}>
                    <p className='text-white'>Subtotal (2 items): <span className='font-bold'>USD 193.24</span></p>
                    <button className='w-full text-white font-bold my-4 bg-green-500 hover:bg-green-700 rounded'>Proceed to buy</button>
                </Grid>
            </Grid>
        </div>
    );
};

export default MyCart;