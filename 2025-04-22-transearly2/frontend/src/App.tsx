import { useSearchParams } from 'react-router-dom';
import './App.css'
import { ChangeEvent, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

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
                return_url: 'http://localhost:5173/payment-complete',
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
    const [jwt, setJwt] = useState<string>('');
    const [ isPaying, setIsPaying ] = useState<boolean>(false)

    useEffect(() => {
        const jwtFromUrl = searchParams.get('jwt')
        const jwtFromStorage = localStorage.getItem('jwt')
    
        const finalJwt = jwtFromUrl || jwtFromStorage
    
        if (finalJwt) {
            localStorage.setItem('jwt', finalJwt)
            setJwt(finalJwt)
    
            const paymentIntent = searchParams.get('payment_intent')
            if (paymentIntent) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const user = jwtDecode(finalJwt) as any
                axios.post(`http://localhost:3000/stripe/update-user-payment-intent/${user.id}/${paymentIntent}`)
                    .then(() => setIsPaying(true))
                    .catch(err => console.error(err))
            }
        }
    }, [searchParams])    

    useEffect(() => {
        setJwt(localStorage.getItem('jwt') || '')
        if(localStorage.getItem('jwt')) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const user = jwtDecode(localStorage.getItem('jwt')!) as any
            if(user.paymentIntent) {
                setIsPaying(true)
            }
        }
    }, [])

  return (
    <>
        {!jwt && <>
            <a href="http://localhost:3000/dropbox/auth">Login</a>
        </>}
        

        {jwt && !isPaying && <>
            <Elements stripe={stripePromise} options={{mode: 'payment', amount: 10000, currency: 'usd'}}>
                <CheckoutForm />
            </Elements>
        </>}

        {jwt && isPaying && <>
            <p>u cas use the app now...</p>
        </>}

    </>
  )
}

export default App;