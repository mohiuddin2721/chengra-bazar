import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const CheckOutForm = ({ price }) => {
    const stripe = useStripe();
    const { user } = useAuth();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    console.log(price)
    useEffect(() => {
        axiosSecure.post('/payment/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('clicked to pay')
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return
        }
        // setProcessing(true)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
            console.log('Payment Method', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message)
        }

        // setProcessing(false)

        // if (paymentIntent.status === "succeeded") {
        //     setTransactionId(paymentIntent.id)
        // }
        console.log(paymentIntent)


    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='border border-indigo-800 bg-indigo-600 rounded-md py-1 px-3 mt-2 text-white font-bold hover:bg-purple-500 cursor-pointer'
                    type="submit"
                    disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500 w-full text-center'>{cardError}</p>}
            {/* {transactionId && <p className='text-green-500 w-full text-center'>Successfully complete your transaction. {transactionId}</p>} */}
        </>
    );
};

export default CheckOutForm;