import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm';
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData()
    return (
      <div>
        <h3>Payment</h3>
        <div className='w-1/2'>
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;