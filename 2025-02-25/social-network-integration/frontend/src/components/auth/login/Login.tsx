import { useForm } from 'react-hook-form';
import './Login.css'
import LoginModel from '../../../models/user/Login';
import auth from '../../../services/auth';
import { useContext } from 'react';
import { AuthContext } from '../auth/Auth';
import Signup from '../signup/Signup';
import { ToastContainer, toast } from 'react-toastify';

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<LoginModel>()
    const { newLogin } = useContext(AuthContext)!

    async function submit(login: LoginModel) {
        await auth.login(login)
            .then(userJwt => newLogin(userJwt))
            .catch(error => {
                toast.error(error.response?.data || error.message);
            })
    }

    return (
        <div className='Login'>
            <div className="login-form">
                <h1>Login</h1>
                <p>Sign in to pick up where you left off.</p>
                <form onSubmit={handleSubmit(submit)}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" placeholder="Enter your username" type="text" {...register('username')} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" placeholder="Enter your password" type="password" {...register('password')} />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
            
            <div className="separator-bar"></div>

            <Signup />
            <ToastContainer />
        </div>
    )
}

export default Login;