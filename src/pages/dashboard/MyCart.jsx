import React, { useContext } from 'react';
import CartProduct from './CartProduct';
import useCart from '../../Hooks/useCart';
import { CartContext } from '../../contexts/CartProvider';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, isLoading, refetch] = useCart()
    const { totalPrice, totalQuantityOrder } = useContext(CartContext)

    // console.log(cart.data)

    const cartProduct = cart?.data?.map(item =>
        <CartProduct
            key={item._id}
            item={item}
            isLoading={isLoading}
            refetch={refetch}
        />)
    const noCartData = <p
        className='text-white font-bold flex h-full justify-center items-center'>
        No data here yet, select your product
    </p>

    return (
        <div>
            <div className='flex w-full justify-around items-center'>
                <p className='text-white text-xl hidden md:flex'>Shopping Cart</p>
                <p className='text-white flex md:hidden mr-2'>Item: <span className='font-bold text-green-400'>{totalQuantityOrder}</span></p>
                <p className='text-white flex md:hidden mx-2'>BDT: <span className='font-bold text-green-400'>{(totalQuantityOrder * 20) + totalPrice}</span></p>
                <Link to="/dashboard/Check_Out_Route">
                    <button
                        className='text-white flex md:hidden font-bold my-4 mx-auto px-3 bg-green-500 hover:bg-green-700 rounded'>
                        Pay
                    </button>
                </Link>
            </div>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                <div className="col-span-5 md:col-span-4 mb-4 md:mb-0 md:mr-2">
                    {
                        cart?.data?.length === 0 ? <div className='h-[60vh]'>{noCartData}</div> : cartProduct
                    }
                </div>
                <div className="col-span-5 md:col-span-1 md:sticky top-0 relative">
                    {
                        cart?.data?.length > 0 && <div className='relative md:fixed text-white text-center'>
                            <div>
                                <p>Items:</p>
                                <p className='my-2 font-bold text-green-400'>{totalQuantityOrder}</p>
                            </div>
                            <div>
                                <p>Subtotal:</p>
                                <p className='my-2 font-bold text-green-400'>{totalPrice} <span className='text-xs'>BDT</span></p>
                            </div>
                            <div>
                                <p>Shifting:</p>
                                <p className='my-2 font-bold text-green-400'>{totalQuantityOrder * 20} <span className='text-xs'>BDT</span></p>
                            </div>
                            <div>
                                <p>Total:</p>
                                <p className='my-2 font-bold text-green-400'>{(totalQuantityOrder * 20) + totalPrice} <span className='text-xs'>BDT</span></p>
                            </div>
                            <Link to="/dashboard/Check_Out_Route">
                                <button className='w-full text-white font-bold my-4 px-3 bg-green-500 hover:bg-green-700 rounded'>Proceed to buy</button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
            <hr />
            <div className='hidden md:block mt-6'>
                {
                    cart?.data?.length > 0 && <div>
                        <table className="table-auto text-white mx-auto">
                            <tbody>
                                <tr>
                                    <td>Item:</td>
                                    <td>{totalQuantityOrder}</td>
                                </tr>
                                <tr>
                                    <td>Subtotal:</td>
                                    <td><span className='text-xs mx-2'>BDT.</span> {totalPrice}</td>
                                </tr>
                                <tr>
                                    <td>Shifting:</td>
                                    <td><span className='text-xs mx-2'>BDT.</span> {totalQuantityOrder * 20}</td>
                                </tr>
                                <tr>
                                    <td>total:</td>
                                    <td><span className='text-xs mx-2'>BDT.</span> {(totalQuantityOrder * 20) + totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to="/dashboard/Check_Out_Route">
                            <button className='text-white font-bold my-4 mx-auto flex px-3 bg-green-500 hover:bg-green-700 rounded'>Proceed to buy</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyCart;