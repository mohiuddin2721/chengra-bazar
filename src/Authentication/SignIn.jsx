import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import SocialLogin from '../components/SocialAuthentication/SocialLogin';
import { useForm } from 'react-hook-form';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
    const { register, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    // const emailRef = useRef('');
    const onSubmit = data => console.log(data);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

    }

    const passwordReset = (event) => {
        // const email = emailRef.current.value;
        // console.log(email);
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-title">LOGIN</div>
                <form
                    className="login-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <label>Your Email</label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        {...register("email", { required: true })}
                    />

                    <label>
                        Your Password
                        <span onClick={handleClickShowPassword}>
                            {
                                showPassword
                                    ?
                                    <RemoveRedEyeIcon className='text-[#70a2d4] ml-1' />
                                    :
                                    <VisibilityOffIcon className='text-[#70a2d4] ml-1' />
                            }
                        </span>
                    </label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="password"
                        {...register("password", { required: true })}
                    />
                    <p
                        onClick={passwordReset}
                        className='text-[#140267] text-sm font-bold text-end underline cursor-pointer'
                    >
                        Forget Password
                    </p>
                    {/* {messageError} */}
                    <button
                        type='submit'
                        className='bg-[#140267] hover:bg-[#140267b4]'
                    >
                        Login
                    </button>
                </form>
                <p className='mt-2'>
                    <small>Don't have an account?</small>
                    <Link to="/signUp"
                        className='text-[#140267] ml-2 text-sm font-bold'
                    >
                        Sign Up
                    </Link>
                </p>

                <div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default SignIn;