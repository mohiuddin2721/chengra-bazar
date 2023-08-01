import React, { useState } from 'react';
import AddressForm from './AddressForm';
import Address from './Address';
import UpdateAddressForm from './UpdateAddressForm';
import useAddress from '../../Hooks/useAddress';
import Loader from '../../components/Loader/Loader';
import mastercard from "../../assets/payment-mastercard.png";
import bkash from "../../assets/bkash.png";

const CheckOut = () => {
    const [userAddress, isLoading] = useAddress();
    const [zip, setZip] = useState(null)
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

    console.log(selectedPaymentOption)
    if (isLoading) {
        return <Loader />
    }

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
            {userAddress?.data?.length != 0 ? (
                <Address handleAddress={handleAddress} zip={zip} />
            ) : (
                <AddressForm />
            )}
            <div className={zip ? 'block my-3 duration-300 ease-in-out opacity-100 transition-transform transform translate-y-0' : 'hidden'}>
                <UpdateAddressForm closeAddress={closeAddress} setZip={setZip} />
            </div>
            <div className='text-white w-full md:w-[60%] mx-auto block md:flex relative border-dashed hover:border-solid border-b-2 border-[#ffffffab] hover:border-green-400 rounded-lg p-8'>
                <div className='w-full md:w-[40%]'>
                    <p className='font-bold text-xl'>2. Payment option:</p>
                </div>
                <div className='w-full md:w-[60%] flex mt-3 md:mt-0'>
                    <div className='w-[40%] md:w-[30%] mx-auto'>
                        <div
                            className='cursor-pointer'
                            onClick={() => setSelectedPaymentOption("mastercard")}
                        >
                            <img src={mastercard} alt="Mastercard" />
                            <span>Mastercard</span>
                        </div>
                    </div>
                    <div className='w-[40%] md:w-[30%] mx-auto'>
                        <div
                            className='cursor-pointer'
                            onClick={() => setSelectedPaymentOption('bkash')}
                        >
                            <img src={bkash} alt="Bkash" />
                            <span>Bkash</span>
                        </div>
                    </div>
                </div>
            </div>
            {selectedPaymentOption === "mastercard" &&
                <div className='h-[40vh] mt-4 bg-gray-900 text-white w-full md:w-[60%] mx-auto block md:flex relative border-dashed hover:border-solid border-b-2 border-[#ffffffab] hover:border-green-400 rounded-lg p-8'>
                    <p className="text-center text-white">mastercard</p>
                </div>
            }
            {selectedPaymentOption === "bkash" &&
                <div className='h-[40vh] mt-4 bg-gray-900 text-white w-full md:w-[60%] mx-auto block md:flex relative border-dashed hover:border-solid border-b-2 border-[#ffffffab] hover:border-green-400 rounded-lg p-8'>
                    <p className="text-center text-white">bkash</p>
                </div>
            }



        </div>
    );
};

export default CheckOut;