import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../components/SocialAuthentication/SocialLogin';
import { Checkbox, FormControlLabel } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const [isCheck, setIsCheck] = useState(null)
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleCheckbox = (e) => {
        const isChecked = e.target.checked;
        setIsCheck(isChecked)
    }
    
    return (
        <div className="login-container">
            <div className="login-title">SIGN UP</div>
            <form
                className="login-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label htmlFor="">Full Name</label>
                <input
                    type="text"
                    name='name'
                    placeholder="Your full name"
                    {...register("full_name", { required: true })}
                />
                <label htmlFor="">Your Email</label>
                <input
                    type="text"
                    name='email'
                    placeholder="Your email"
                    {...register("email", { required: true })}
                />
                {/* <label htmlFor="">New Password</label> */}
                <label>
                    Your Password
                    <span onClick={handleClickShowPassword}>
                        {
                            showPassword
                                ?
                                <RemoveRedEyeIcon className='text-[#70a2d4] ml-1 cursor-pointer' />
                                :
                                <VisibilityOffIcon className='text-[#70a2d4] ml-1 cursor-pointer' />
                        }
                    </span>
                </label>
                <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder="Password"
                    required
                />
                <FormControlLabel
                    required
                    control=
                    {<Checkbox
                        onChange={(e) => handleCheckbox(e)} />
                    }
                    label="I agree with your conditions"
                />
                <button
                    type='submit'
                    disabled={!isCheck ? true : false}
                    className={`${isCheck ? 'bg-[#140267]' : 'bg-[#140267b4]'}`}
                    variant="contained"
                >
                    SIGN UP
                </button>
            </form>
            <p
                className='mt-2'
            >
                <small>Already have an account?</small>
                <Link
                    to="/signIn"
                    className='text-[#140267] ml-2 text-sm font-bold'
                >
                    Please Login
                </Link>
            </p>
            <div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignUp;