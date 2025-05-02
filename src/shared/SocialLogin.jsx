import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import url from '../url';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location)

    const navigate = useNavigate();


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                if (result.user.uid) {
                    Swal.fire({
                        title: "Register successfully",
                        text: "Please Try Login",
                        icon: "success"
                    });
                }
                navigate(location?.state ? location.state : '/') //state thakle nevigate korbo na thakle  home page
                const email = result.user.email
                const lastSignInTime = result.user.metadata.lastSignInTime
                const creationTime = result.user.metadata.creationTime
                const photourl = result.user.photoURL;
                const displayName = result.user.displayName;


                const userData = {
                    email, lastSignInTime, creationTime, photourl, displayName,role:'user'
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
                        const user = { email: data.user.email };
                        axios.post(`${url}/jwt`, user, { withCredentials: true })
                            .then(res => {
                                console.log(res.data);
                            })
                        // console.log(data)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline bg-amber-400 text-black w-full'>Google</button>
        </div>
    );
};

export default SocialLogin;