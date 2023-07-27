import React from 'react'
import './Login.css'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setprofilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        // Add login logic here
    };

    const register = () => {
        if (!name) {
            return alert('Please enter your full name!');
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: profilePic,
                });
            })
            .then(() => {
                dispatch(
                    login({
                        email: auth.currentUser.email,
                        uid: auth.currentUser.uid,
                        displayName: name,
                        photoURL: profilePic,
                    })
                );
            })
            .catch((error) => alert(error));
    };

  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="" />

        <form action="">
            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder='Full Name (required when registering)' />
            {/* <input type="text" placeholder='Last Name' required/> */}
            <input value={profilePic} onChange={e => setprofilePic(e.target.value)} type="text" placeholder='Profile picture URL'/>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email' required/>
            <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' required/>

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>

        <p>Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login