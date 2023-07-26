import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import CartProduct from './CartProduct';

const MyCart = () => {
    const { user } = useContext(AuthContext)
    // console.log(user?.email)
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['getAllCategory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/addCart?userEmail=${user?.email}`);
            const data = res.json();
            return data;
        }
    });

    // const totalPrice = await data?.reduce((total, item) => total + item.total, 0);
    const totalPrice = data?.data?.reduce((total, item) => total + item.total, 0);
    const totalQuantityOrder = data?.data?.reduce((total, item) => total + item.quantityOrder, 0);
    // console.log(totalPrice)
    const cartProduct = data?.data?.map(item =>
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
    // console.log(totalPrice)
    // console.log(totalQuantityOrder)
    return (
        <div>
            <p className='text-white text-xl'>Shopping Cart</p>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                <div className="col-span-5 md:col-span-4 mb-4 md:mb-0 md:mr-2">
                    {
                        data?.data?.length === 0 ? <div className='h-[60vh]'>{noCartData}</div> : cartProduct
                    }
                </div>
                <div className="col-span-5 md:col-span-1 md:sticky top-0 relative">
                    <div className='relative md:fixed text-white text-center'>
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
                        {/* <p className='text-white'>Subtotal ({totalQuantityOrder} items): <span className='font-bold'>BDT {totalPrice}</span></p>
                        <p className='text-white'>Shifting: <span className='font-bold'>BDT {totalQuantityOrder * 20}</span></p>
                        <p className='text-white'>Total: <span className='font-bold'>BDT {(totalQuantityOrder * 20) + totalPrice}</span></p> */}
                        <button className='w-full text-white font-bold my-4 px-3 bg-green-500 hover:bg-green-700 rounded'>Proceed to buy</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className='hidden md:block mt-6'>
                <table className="table-auto text-white mx-auto">
                    <tbody>
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
                <button className='text-white font-bold my-4 mx-auto flex px-3 bg-green-500 hover:bg-green-700 rounded'>Proceed to buy</button>
            </div>
        </div>
    );
};

export default MyCart;