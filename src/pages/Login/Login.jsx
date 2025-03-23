import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import Lottie from 'lottie-react';
import loginLottieData from '../../assets/Lottie/loginLottieDate.json';
import SocialLogin from '../../shared/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    
    // const from = location.state || '/';
    // console.log(from)
    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (!email || !password) {
            setError("Email and Password are required!");
            return;
        }

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location.state || '/');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <Lottie className="flex-1" animationData={loginLottieData} />
                <div className="shadow-2xl w-full md:w-1/2 mx-auto border-t-4 border-green-500 p-10 my-12 rounded-xl flex-1">
                    <h1 className="text-center border-b-4 border-cyan-700 w-1/2 mx-auto my-10 text-xl font-bold">Please Login</h1>
                    
                    {error && <p className="text-red-500 text-center" aria-live="polite">{error}</p>}

                    <form onSubmit={handleSignIn}>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                        <input type="email" id="email" name="email" className="w-full my-2 p-2 border border-gray-300 rounded-md" required />
                        
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input type="password" id="password" name="password" className="w-full my-2 p-2 border border-gray-300 rounded-md" required />
                        
                        <input type="submit" className="btn btn-outline bg-amber-400 w-full text-black font-bold mt-4" value="Login" />
                    </form>

                    <div className="divider">OR</div>
                    <SocialLogin />

                    <p className="text-center mt-4">
                        Don't have an account? <NavLink to="/auth/register" className="font-bold text-blue-400">Register</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
