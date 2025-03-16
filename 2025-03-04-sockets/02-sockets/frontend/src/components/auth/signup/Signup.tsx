import { useForm } from 'react-hook-form';
import SignupModel from '../../../models/user/Signup';
import auth from '../../../services/auth';
import { ToastContainer, toast } from 'react-toastify';

function Signup(): JSX.Element {

    const { register, handleSubmit, reset } = useForm<SignupModel>()

    async function submitSignup(signup: SignupModel) {
        signup.imagePic = (signup.imagePic as unknown as FileList)[0]
        await auth.signup(signup)
            .then(() => {
                reset()
                toast.success("Your account has been created. Welcome aboard !")
            })
            .catch(error => {
                toast.error(error.response?.data || error.message);
            })
    }

    return (
        <div className="signup-form">
            <h1>Sign Up</h1>
            <p>Create an account to get started.</p>
            <form onSubmit={handleSubmit(submitSignup)}>
                <div className="input-group">
                    <label htmlFor="fullName">Name</label>
                    <input id="fullName" placeholder="Enter your name" type="text" {...register('name')} />
                </div>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input id="username" placeholder="Enter your username" type="text" {...register('username')} />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" placeholder="Enter your password" type="password" {...register('password')} />
                </div>
                <div className="input-group">
                    <label htmlFor="profilePic">Profile pic</label>
                    <input id="profilePic" type="file" {...register('imagePic')} />
                    
                </div>
                <button type="submit" className="signup-btn">Sign Up</button>
            </form>
            
            <ToastContainer />
        </div>
    )
}

export default Signup;