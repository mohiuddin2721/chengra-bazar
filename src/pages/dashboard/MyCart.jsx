import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import CartProduct from './CartProduct';

const MyCart = () => {
    const { user } = useContext(AuthContext)

    const { data, isLoading } = useQuery({
        queryKey: ['getAllCategory'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/api/v1/addCart?userEmail=${user?.email}`);
            const data = res.json();
            return data;
        }
    });
    // console.log(user)

    return (
        <div>
            <p className='text-white text-xl'>Shopping Cart</p>
            <hr />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-4">
                <div className="col-span-5 md:col-span-4 mb-4 md:mb-0 md:mr-2">
                    {
                        data?.data?.map(item =>
                            <CartProduct key={item._id} item={item} />
                        )
                    }
                </div>
                <div className="col-span-5 md:col-span-1 md:sticky top-0 relative">
                    <div className='relative md:fixed'>
                        <p className='text-white'>Subtotal (2 items): <span className='font-bold'>BDT 193.24</span></p>
                        <button className='w-full text-white font-bold my-4 bg-green-500 hover:bg-green-700 rounded'>Proceed to buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;