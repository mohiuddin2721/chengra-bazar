import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import SocialLogin from '../components/SocialAuthentication/SocialLogin';
import { useForm } from 'react-hook-form';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { AuthContext } from '../contexts/AuthProvider';

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const { signIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleLogin = data => {
        setLoginError('')
        console.log(data)
        signIn(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
            .catch((error) => {
                setLoginError(error.message)
                console.log(error.message)
            })
    };


    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-title">LOGIN</div>
                <form
                    className="login-form"
                    onSubmit={handleSubmit(handleLogin)}
                >
                    <label>Your Email</label>
                    <input
                        type="email"
                        name='email'
                        placeholder="Your Email"
                        {...register("email", { required: 'valid email is required' })}
                    />
                    {errors?.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
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
                        {...register("password", { required: 'valid password is required' })}
                    />
                    {errors?.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                    <p className='text-[#140267] text-sm font-bold text-end underline cursor-pointer'>
                        Forget Password
                    </p>
                    <div>
                        {loginError && <p className='text-red-500 text-xs'>{loginError}</p>}
                    </div>
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