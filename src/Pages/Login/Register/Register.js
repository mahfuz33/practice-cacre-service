import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = event =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.namw.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='register-form'>
            <h2 className='text-center mt-10'>Pleases register.</h2>
            <form onSubmit={handleRegister}> 
                <input type="text" name='name' id='' placeholder='Your Name' />
                <input type="email" name='email' id='' placeholder='Email Address' required/>
                <input type="password" name='password' id='' placeholder='Password' required/>
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;