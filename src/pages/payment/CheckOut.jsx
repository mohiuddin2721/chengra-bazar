import React, { useContext, useEffect, useState } from 'react';
import AddressForm from './AddressForm';
import { AuthContext } from '../../contexts/AuthProvider';
import Address from './Address';
import UpdateAddressForm from './UpdateAddressForm';
import useAddress from '../../Hooks/useAddress';
import Loader from '../../components/Loader/Loader';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const [userAddress, isLoading] = useAddress();
    const [mainAddress, setMainAddress] = useState([])
    const [updateForm, setUpdateForm] = useState(false)
    const [zip, setZip] = useState(null)

    // console.log(userAddress?.data)
    if (isLoading) {
        return <Loader />
    }
    // useEffect(() => {

    // }, [])

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
                <UpdateAddressForm closeAddress={closeAddress} />
            </div>
            <div>
                <p className='text-white'>payment</p>
            </div>
        </div>
    );
};

export default CheckOut;