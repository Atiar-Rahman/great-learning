/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import registerLottieData from '../../assets/Lottie/registerLottieData.json';
import Lottie from 'lottie-react';
import SocialLogin from '../../shared/SocialLogin';
import Swal from 'sweetalert2';
import url from '../../url'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import auth from '../../firebase/firebase.init';
import { sendEmailVerification } from 'firebase/auth';
import swal from 'sweetalert';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const terms = form.terms.checked;

        if(!terms){
            setError("pelase accept our terms and condiation")
            return;
        }
        //reset error message
        setError('')
        //password validation and show error message
        if (password.length < 6) {
            setError('password should be 6 characters');
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/;
        if (!passwordRegex.test(password)) {
            setError('At least one upper,lower,number,special')
            return;
        }



        // console.log(email,password)
        createUser(email, password)
            .then(result => {
                //set verification email address
                sendEmailVerification(auth.currentUser)
                .then(swal('verified email address'))

                // console.log(result.user);
                if (result.user.uid) {
                    Swal.fire({
                        title: "Register successfully",
                        text: "Please Try Login",
                        icon: "success"
                    });
                }
                const email = result.user.email
                const lastSignInTime = result.user.metadata.lastSignInTime
                const creationTime = result.user.metadata.creationTime
                const photourl = result.user.photoURL;
                const displayName = result.user.displayName;


                const userData = {
                    email, lastSignInTime, creationTime, photourl, displayName
                }
                fetch(`${url}/users`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                    })
            })
            .catch(err => {
                console.log(err);
                setError(err.message)
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
                        <div className='relative'>
                            <input type={showPassword ? 'text' : 'password'} className='w-full my-4 p-2' name="password" placeholder='password' id="" />
                            <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-5 top-6'> {showPassword ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}</button>
                        </div>
                        <label className="label">
                            <input name='terms' type="checkbox"  className="checkbox" />
                            Remember me
                        </label>
                        <input type="submit" className='btn btn-outline bg-amber-400 w-full text-black font-bold' value="Register" />
                    </form>
                    <div className='divider'>OR</div>
                    <SocialLogin></SocialLogin>
                    <p className='text-center'>Don't have an account? please <NavLink to='/auth/login' className='font-bold text-blue-400'>SignIn</NavLink></p>
                    <p className='my-5 text-red-500'>{error}</p>
                </div>

            </div>

        </div>
    );
};

export default Register;