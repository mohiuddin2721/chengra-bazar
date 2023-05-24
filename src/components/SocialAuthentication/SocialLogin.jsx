import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const SocialLogin = () => {
    return (
        <div>
            <div>
                <p className='mt-2 px-2 text-center'>or</p>
            </div>
            {/* {massageError} */}
            <div>
                <button
                    style={{ background: '120e43' }}
                    className='btn w-75 d-block mx-auto my-2'
                    onClick={() => signInWithGoogle()}>
                    <span className='px-2 text-light'>Google Log In</span>
                    <GoogleIcon sx={{ fontSize: '20px' }} />
                </button>
                <button
                    style={{ background: '120e43' }}
                    className='btn w-75 d-block mx-auto my-2'
                    onClick={() => signInWithFacebook()}>
                    <span className='px-2 text-light'><small>Facebook Log In</small></span>
                    <FacebookOutlinedIcon sx={{ fontSize: '20px' }} />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;