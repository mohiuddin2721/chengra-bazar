import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {
    FacebookAuthProvider,
    GoogleAuthProvider,
    getAuth,
    signInWithPopup
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const auth = getAuth(app)

    // const [googleError, setGoogleError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIN = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const handleFacebookSignIN = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <div>
                <p className='mt-2 px-2 text-center font-bold'>or</p>
            </div>
            {/* {googleError && <p className='text-red-500 text-xs'>{googleError}</p>} */}
            <p className='text-center'>Sign in with</p>
            <div className='flex justify-between'>
                <div className='w-[48%]'>
                    <button
                        className='btn bg-[#120e43] hover:bg-[#120e43cf]'
                        onClick={handleGoogleSignIN}
                    >
                        <span className='px-2 text-light'><small>Google</small></span>
                        <GoogleIcon sx={{ fontSize: '15px' }} />
                    </button>
                </div>
                <div className='w-[48%]'>
                    <button
                        className='btn bg-[#120e43] hover:bg-[#120e43cf]'
                        onClick={handleFacebookSignIN}
                    >
                        <span className='px-2 text-light'><small>Facebook</small></span>
                        <FacebookOutlinedIcon sx={{ fontSize: '15px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;