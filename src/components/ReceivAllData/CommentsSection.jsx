import React from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Avatar, Rating } from '@mui/material';

const CommentsSection = ({ productName }) => {
    const { user } = useAuth()
    const [ratingValue, setRatingValue] = useState(5)
    const [openCommentReview, setOpenCommentReview] = useState(false);
    const navigate = useNavigate();

    // console.log(ratingValue)

    const keepCommentReview = () => {
        if (user) {
            setOpenCommentReview(true);
        } else {
            Swal.fire({
                position: 'top-middle',
                icon: 'error',
                title: 'Must need to login',
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: `<Link to='/signIn'>Login</Link>`,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                showCancelButton: true,
                cancelButtonText: 'Cancel',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn');
                }
            });
        }
    }
    
    return (
        <div className='h-auto'>
            <div>
                <p className='text-xl font-bold'>Ratings & Reviews of {productName}</p>
                <p
                    onClick={keepCommentReview}
                    className={`underline cursor-pointer ${openCommentReview ? 'hidden' : 'inline-block'}`}
                >
                    Keep your comment and give valuable review
                </p>
            </div>
            {
                openCommentReview &&
                <div className='relative my-4'>
                    <span
                        onClick={() => setOpenCommentReview(false)}
                        className='text-green-500 font-bold absolute top-2 right-5 cursor-pointer'
                    >
                        X
                    </span>
                    <div className='flex h-full items-center'>
                        <Avatar
                            alt={user?.displayName}
                            src={user?.photoURL}
                            sx={{ width: 56, height: 56 }}
                        />
                        <p className='ml-2 font-bold'>{user?.displayName}</p>
                    </div>
                    <div>
                        <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                        />
                    </div>
                </div>
            }
        </div>
    );
};

export default CommentsSection;