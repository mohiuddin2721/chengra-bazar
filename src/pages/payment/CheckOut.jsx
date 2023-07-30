import React, { useContext, useState } from 'react';
import AddressForm from './AddressForm';
import { BsFillPencilFill } from 'react-icons/bs';
import { AuthContext } from '../../contexts/AuthProvider';
import Address from './Address';
import UpdateAddressForm from './UpdateAddressForm';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const [address, setAddress] = useState(true)
    const [updateForm, setUpdateForm] = useState(false)
    const [zip, setZip] = useState(null)

    const handleAddress = () => {
        setZip(true)
    }
    const closeAddress = () => {
        setZip(false);
    }

    return (
        <div>
            <div>
                <p className='text-white font-bold'>Checkout</p>
            </div>
            <hr className='my-4' />
            {
                address ? <Address handleAddress={handleAddress} zip={zip} /> : <AddressForm />
            }
            {/* <div className='text-white w-full md:w-[60%] mx-auto block md:flex relative border-dashed hover:border-solid border-b-2 border-[#ffffffab] hover:border-green-400 rounded-lg p-8'>
                <div className='w-full md:w-2/4 p-2'>
                    <p className='font-bold text-xl'>1. Shipping address:</p>
                </div>
                <div className='w-full md:w-2/4 p-2 text-sm font-sans'>
                    <p className="font-bold mb-2">Talib Ali (01680106149)</p>
                    <p className="text-white">talibalidhfkh@gmail.com</p>
                    <p className="text-white">Chengra Bazar (Zip: 015420)</p>
                    <p className="text-white">Bangladesh, Dhaka</p>
                </div>
                <span
                    onClick={handleAddress}
                    className='absolute top-4 right-4 flex cursor-pointer text-green-500 hover:text-green-300 underline'>
                    Change <BsFillPencilFill className='ml-2' />
                </span>
            </div> */}
            <div className={zip ? 'block my-3 duration-300 ease-in-out opacity-100 transition-transform transform translate-y-0' : 'hidden'}>
                <UpdateAddressForm closeAddress={closeAddress} />
            </div>
            <div>
                <p className='text-white'>payment</p>
            </div>
        </div>
    );
};

export default CheckOut;