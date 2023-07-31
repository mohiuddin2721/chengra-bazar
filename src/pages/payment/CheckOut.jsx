import React, { useState } from 'react';
import AddressForm from './AddressForm';
import Address from './Address';
import UpdateAddressForm from './UpdateAddressForm';
import useAddress from '../../Hooks/useAddress';
import Loader from '../../components/Loader/Loader';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const CheckOut = () => {
    const [userAddress, isLoading] = useAddress();
    const [zip, setZip] = useState(null)

    // console.log(userAddress?.data)
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
                <div className='w-full md:w-2/4 p-2'>
                    <p className='font-bold text-xl'>1. Payment option:</p>
                </div>
                <div>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel
                                value="disabled"
                                disabled
                                control={<Radio />}
                                label="other"
                            />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;