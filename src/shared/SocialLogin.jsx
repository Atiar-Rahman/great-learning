import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import url from '../url';
import Swal from 'sweetalert2';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);

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
                        console.log(data)
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