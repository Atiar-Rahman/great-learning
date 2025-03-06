/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import registerLottieData from '../../assets/Lottie/registerLottieData.json';
import Lottie from 'lottie-react';
const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister=e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        //password validation and show error message
        console.log(email,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Lottie className='flex-1' animationData={registerLottieData}></Lottie>
                <div className='flex-1 shadow-2xl w-full md:w-1/2 mx-auto border-t-4 border-green-500 p-10 my-12 rounded-xl'>
                    <h1 className='text-center border-b-4 border-b-cyan-700 w-1/2 mx-auto my-10'>Please Register Now</h1>
                    <form onSubmit={handleRegister}>
                        <input type="text" className='w-full my-4 p-2' placeholder='Enter your name' name="name" id="" />
                        <input type="email" className='w-full my-4 p-2' placeholder='Enter your email' name="email" id="" />
                        <input type="password" className='w-full my-4 p-2' name="password" placeholder='password' id="" />
                        <input type="submit" className='btn btn-outline bg-amber-400 w-full text-black font-bold' value="Register" />
                    </form>
                    <p className='text-center'>Don't have an account? please <NavLink to='/auth/login' className='font-bold text-blue-400'>SignIn</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Register;