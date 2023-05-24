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
                        className='btn bg-[#120e43] hover:bg-[#120e43cf]'
                        onClick={() => signInWithGoogle()}
                    >
                        <span className='px-2 text-light'><small>Sing-in by</small></span>
                        <GoogleIcon sx={{ fontSize: '15px' }} />
                    </button>
                </div>
                <div className='w-[48%]'>
                    <button 
                        className='btn bg-[#120e43] hover:bg-[#120e43cf]'
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