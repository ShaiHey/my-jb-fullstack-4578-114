import { useForm } from 'react-hook-form';
import './Login.css'
import LoginModel from '../../../models/user/Login';
import auth from '../../../services/auth';
import { useContext } from 'react';
import { AuthContext } from '../auth/Auth';

function Login(): JSX.Element {

    const { register, handleSubmit } = useForm<LoginModel>()

    const { setJwt } = useContext(AuthContext)!

    async function submit(login: LoginModel) {
        const userJwt = await auth.login(login)
        setJwt(userJwt)
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit(submit)}>
                <input placeholder='username' type="text" {...register('username')} />
                <input placeholder='password' type="password" {...register('password')} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;