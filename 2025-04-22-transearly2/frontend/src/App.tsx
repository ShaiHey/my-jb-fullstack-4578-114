import { useSearchParams } from 'react-router-dom';
import './App.css'
import { ChangeEvent, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';

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

        const res = await fetch('/create-intent', {
            method: 'POST',
        });

        const {client_secret: clientSecret} = await res.json();

        await stripe!.confirmPayment({
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'https://example.com/order/123/complete',
            },
        });
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
            <Elements stripe={stripePromise} options={{mode: 'payment', amount: 100, currency: 'usd'}}>
                <CheckoutForm />
            </Elements>
        </p>}
    </>
  )
}

export default App;