import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../components/SocialAuthentication/SocialLogin';
import { Button, Checkbox, FormControlLabel } from '@mui/material';

const SignUp = () => {
    const [isCheck, setIsCheck] = useState(null)

    const handleCheckbox = (e) => {
        const isChecked = e.target.checked;
        setIsCheck(isChecked)
        // console.log(isChecked)
    }
    const handleSignUp = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(name, email, password);
    }
    return (
        <div className="login-container">
            <div className="login-title">SIGN UP</div>
            <form className="login-form" onSubmit={handleSignUp}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder="Your Name" required />
                <label htmlFor="">Your Email</label>
                <input type="text" name='email' placeholder="Your Email" required />
                <label htmlFor="">New Password</label>
                <input type="password" name='password' placeholder="Password" required />
                <FormControlLabel
                    required
                    control=
                    {<Checkbox
                        onChange={(e) => handleCheckbox(e)} />
                    }
                    label="I agree your conditions"
                />
                <Button
                    type='submit'
                    disabled={!isCheck ? true : false}
                    variant="contained"
                >
                    SIGN UP
                </Button>
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