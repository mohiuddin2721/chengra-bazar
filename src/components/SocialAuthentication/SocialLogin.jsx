import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const SocialLogin = () => {
    return (
        <div>
            <div>
                <p className='mt-2 px-2 text-center font-bold'>or</p>
            </div>
            {/* {massageError} */}
            <div className='flex justify-between'>
                <div className='w-[48%]'>
                    <button
                        style={{ background: '120e43' }}
                        className='btn'
                        onClick={() => signInWithGoogle()}
                    >
                        <span className='px-2 text-light'><small>Sing-in by</small></span>
                        <GoogleIcon sx={{ fontSize: '15px' }} />
                    </button>
                </div>
                <div className='w-[48%]'>
                    <button
                        style={{ background: '120e43' }}
                        className='btn w-[50%] d-block mx-auto my-2'
                        onClick={() => signInWithFacebook()}
                    >
                        <span className='px-2 text-light'><small>Sing-in by</small></span>
                        <FacebookOutlinedIcon sx={{ fontSize: '15px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;