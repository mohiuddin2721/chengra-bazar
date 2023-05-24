import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import SocialLogin from '../components/SocialAuthentication/SocialLogin';

const SignIn = () => {
    const emailRef = useRef('');
    const handleLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);
        // console.log(data);
    }

    const passwordReset = async (event) => {
        const email = emailRef.current.value;
        // console.log(email);
    }

    return (
        <div className="login-container">
            <div className="login-title">LOGIN</div>
            <form className="login-form" onSubmit={handleLogin}>
                <label htmlFor="">Your Email</label>
                <input type="email" ref={emailRef} name='email' placeholder="Your Email" required />
                <label htmlFor="">Your Password</label>
                <input type="password" name='password' placeholder="password" required />
                {/* {messageError} */}
                <button type='submit'>Login</button>
            </form>
            <p className='mt-2'>
                <small>New to chengra bazar?</small> 
                <Link to="/signUp"
                    className='text-[#140267] ml-2 text-sm font-bold'
                >
                    Please Sign Up
                </Link>
            </p>
            <p
                onClick={passwordReset}
                className='text-[#140267] text-sm font-bold'
            >
                Forget Password?
            </p>
            <div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default SignIn;