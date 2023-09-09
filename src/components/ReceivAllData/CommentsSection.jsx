import React from 'react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Avatar, Rating } from '@mui/material';
import { toastConfig } from '../../Utils/ConstantData';
import { toast } from 'react-toastify';

const CommentsSection = ({ productName, id }) => {
    const { user } = useAuth()
    const [ratingValue, setRatingValue] = useState(5)
    const [textAreaValue, setTextAreaValue] = useState("")
    const [openCommentReview, setOpenCommentReview] = useState(false);
    const navigate = useNavigate();

    // console.log(textAreaValue)
    const submitComment = () => {
        if (textAreaValue) {
            const commentData = {
                productId: id,
                name: user?.displayName,
                rate: ratingValue,
                review: textAreaValue,
            }
            console.log(commentData)
            const url = "http://localhost:5000/api/v1/comments_hub";
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(commentData)
            })
                .then(res => res.json())
                .then(posted => {
                    console.log("posted", posted)
                    if (posted.status === 'fail') {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Product is not inserted. please try again',
                        })
                    } else {
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Product data Successfully updated',
                        })
                    }
                    setTextAreaValue("")
                    setOpenCommentReview(false)
                    toast.success("Thanks for your review", toastConfig)
                })
        }
    }
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
            <div className=''>
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
                <div className='relative my-4 bg-[#f7dbf8] rounded-sm p-4'>
                    <span
                        onClick={() => setOpenCommentReview(false)}
                        className='text-green-500 font-bold absolute top-2 right-5 cursor-pointer'
                    >
                        X
                    </span>
                    <div className='flex h-full items-center relative'>
                        <Avatar
                            alt={user?.displayName}
                            src={user?.photoURL}
                            sx={{ width: 56, height: 56 }}
                        />
                        <p className='ml-2 font-bold text-green-500'>{user?.displayName}</p>

                    </div>
                    <div className='mt-2'>
                        <Rating
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                        />
                        <div>
                            <textarea
                                onChange={(e) => setTextAreaValue(e.target.value)}
                                placeholder='comment here....'
                                className="resize rounded-md w-full md:w-[80%] lg:w-[70%] h-[100px]"></textarea>
                        </div>
                        <div className='mt-3'>
                            <button
                                onClick={submitComment}
                                className='bg-[#171150] text-white py-1 px-2 rounded-md mx-4'
                            >
                                comment
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default CommentsSection;