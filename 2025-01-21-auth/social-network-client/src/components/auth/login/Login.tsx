import { useForm } from 'react-hook-form';
import './Login.css'
import LoginModel from '../../../models/user/Login';
import auth from '../../../services/auth';
import { useContext } from 'react';
import { AuthContext } from '../auth/Auth';

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<LoginModel>()
    const { newLogin } = useContext(AuthContext)!

    async function submit(login: LoginModel) {
        const userJwt = await auth.login(login)
        newLogin(userJwt)
    }

    return (
        <div className='Login'>
            <div className="login-form">
                <h1>Welcome Back !</h1>
                <p>Please enter your username and password to login.</p>
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
        </div>
    )
}

export default Login;