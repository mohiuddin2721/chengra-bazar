import React, { useState } from 'react';
import { CardContent, Grid } from '@mui/material';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { glassStyle_1, glassStyle_2 } from '../../Styles/DashboardStyle';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';

const CartProduct = ({ item, refetch }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [quantityOrder, setQuantityOrder] = useState(item?.quantityOrder)

    const toastConfig = {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const increaseQuantity = (quantityOrder, id, price, refetch) => {
        const updatedQuantity = quantityOrder + 1;
        // console.log("updatedQuantity", updatedQuantity)
        fetch(`http://localhost:5000/api/v1/addCart/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantityOrder: updatedQuantity, price: price }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // console.log(data?.data?.quantityOrder)
                if (data?.status === 'success') {
                    setQuantityOrder(data?.data?.quantityOrder)
                    refetch()
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
    }
    const decreaseQuantity = async (quantityOrder, id, price, refetch) => {
        const updatedQuantity = quantityOrder - 1;
        // console.log("updatedQuantity", updatedQuantity)
        fetch(`http://localhost:5000/api/v1/addCart/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantityOrder: updatedQuantity, price: price }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // console.log(data?.data?.quantityOrder)
                if (data?.status === 'success') {
                    setQuantityOrder(data?.data?.quantityOrder)
                    refetch()
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
    }
    const deleteCartProduct = (id) => {
        // console.log(id)
        fetch(`http://localhost:5000/api/v1/addCart/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // console.log("data.acknowledged", data.data.acknowledged);
                if (data?.data?.acknowledged) {
                    toast.success('Cart product cancelled successfully', toastConfig)
                    refetch()
                }
                else {
                    toast.error('Something went wrong', toastConfig)
                }
            })
    }

    return (
        <Grid
            style={isHovered ? glassStyle_1 : glassStyle_2}
            sx={{ borderBottom: '1px solid white', borderRadius: '10px', marginBottom: '15px' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            container
            spacing={1}
        >
            <Grid item xs={12} sm={12} md={5} lg={4}>
                <div className='w-[80%] mx-auto mb-1'>
                    <img
                        className='w-full'
                        src={`http://localhost:5000/${item.selectedProductImg}`}
                        alt={item?.name}
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
                    <p className='font-bold pt-2'>Name: {item?.name}</p>
                    <p className='text-xs text-green-300 pb-2'>{item?.status}in-stock</p>
                    <p className='mb-2'>
                        Price:<span className='text-green-300 font-bold ml-2'>{item?.price}</span> <span className='text-xs'>BDT</span>
                    </p>
                    <p className='flex items-center mb-2'>
                        Total: <span className='text-green-300 font-bold ml-2'>{item?.price * quantityOrder}</span> <span className='text-xs ml-1'>BDT</span>
                        <BiPlus className='text-xl mx-2' />
                        Shifting: <span className='text-green-300 font-bold mx-1'>{quantityOrder * 20}</span> <span className='text-xs ml-1'>BDT</span>
                    </p>
                    {/* <p className='text-green-300 text-2xl font-bold mb-2'> {item.price * quantityOrder} <span className='text-xs'>BDT</span> </p> */}
                    <p className='text-xs'>Brand: {item?.brand}Ss World</p>
                    <div className='my-2'>
                        <p className='flex'>
                            Quantity:
                            <span>
                                <button
                                    onClick={() => decreaseQuantity(quantityOrder, item?._id, item?.price, refetch)}
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
                                    onClick={() => increaseQuantity(quantityOrder, item?._id, item?.price, refetch)}
                                    className={`ml-1 cursor-pointer text-2xl ${quantityOrder >= item.quantity ? 'text-gray-400' : 'text-white'}`}
                                    disabled={quantityOrder >= item.quantity}
                                >
                                    <BiPlus />
                                </button>
                            </span>
                        </p>
                        <p
                            onClick={() => deleteCartProduct(item._id)}
                            className='cursor-pointer text-white font-bold ml-4'>
                            | <span className='text-green-400 hover:text-green-600 mx-2'>Delete</span> |
                        </p>
                    </div>
                </CardContent>
            </Grid>
        </Grid>
    );
};

export default CartProduct;