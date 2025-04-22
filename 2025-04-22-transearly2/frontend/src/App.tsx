import { useSearchParams } from 'react-router-dom';
import './App.css'
import { ChangeEvent, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (elements == null) {
            return;
        }

        const {error: submitError} = await elements.submit();
        if (submitError) {
            setErrorMessage(submitError.message!);
            return;
        }

        const res = await axios.post('http://localhost:3000/stripe/payment-intent');

        const { paymentIntent } = await res.data;

        const { error } = await stripe!.confirmPayment({
            elements,
            clientSecret: paymentIntent.client_secret,
            confirmParams: {
                return_url: 'http://localhost:5173/payment-complete=true',
            },
        });

        if(error) setErrorMessage(error.message!)
    };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <br />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51RGbtWGDbCikUzWZsOROiK1gHfeuupqm91zhjSj0vuaIp5ruxqa0HhrctzxHORfDmQWag3svB4ReFfECs2O88yCy00EfY9i1ca');

function App() {
    const [searchParams] = useSearchParams(); 
    const [jwt, setJwt] = useState<string>('')

    useEffect(() => {
        if(searchParams.get('jwt')) {
            setJwt(searchParams.get('jwt')!)
        }
    }, [searchParams])

  return (
    <>
        {!jwt && <p>
            <a href="http://localhost:3000/dropbox/auth">Login</a>
            </p>}
        

        {jwt && <p>
            <Elements stripe={stripePromise} options={{mode: 'payment', amount: 10000, currency: 'usd'}}>
                <CheckoutForm />
            </Elements>
        </p>}
    </>
  )
}

export default App;