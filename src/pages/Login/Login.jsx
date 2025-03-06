import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import loginLottieData from '../../assets/Lottie/loginLottieDate.json';
import SocialLogin from '../../shared/SocialLogin';
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-10">
               <Lottie className='flex-1' animationData={loginLottieData}></Lottie>
                <div className='shadow-2xl w-full md:w-1/2 mx-auto border-t-4 border-green-500 p-10 my-12 rounded-xl flex-1'>
                    <h1 className='text-center border-b-4 border-b-cyan-700 w-1/2 mx-auto my-10'>Please Login</h1>
                    <form onSubmit={handleSignIn}>
                        <input type="email" className='w-full my-4 p-2' placeholder='Enter your email' name="email" id="" />
                        <input type="password" className='w-full my-4 p-2' name="password" placeholder='password' id="" />
                        <input type="submit" className='btn btn-outline bg-amber-400 w-full text-black font-bold' value="login" />
                    </form>
                    <div className='divider'>OR</div>
                    <SocialLogin></SocialLogin>
                    <div>
                        <p className='text-center'>Don't have an account? please <NavLink to='/auth/register' className='font-bold text-blue-400'>Register</NavLink></p>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;