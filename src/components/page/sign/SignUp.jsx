import React, { useContext, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUser, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const notify = () => toast("Successfully signed up!");


    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password);

        const regex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return;
        }
        else if (regex.test(password)) {
            setError("You can not use any capital letter or any special character");
            return;
        }

        setError('');
        setSuccess('');

        createUser(email, password)
            .then(res => {
                navigate(location?.state ? location.state : '/');
                setSuccess({ notify });
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo
                })
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })
    }
    return (
        <div className='space-y-10'>
            <Helmet>
                <title>Job hustle | Sign up</title>
            </Helmet>
            <Header></Header>
            <div>
                <div className="w-1/2 mx-auto py-5 bg-[#06D6C6] rounded-lg border-2 border-b-8 border-solid border-b-[#06D6C6]">
                    <div className="text-center py-10">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                    </div>
                    <div>
                        <form onSubmit={handleSignUp} className="card-body space-y-5 bg-base-100">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Type your name" className="input input-bordered" required />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder='Your photo url' className='input input-bordered' />
                            </div>
                            <div className='form-control'>
                                <label className='label'>
                                    <span className='label-text'>Email</span>
                                </label>
                                <input type="email" name='email' placeholder='Type your email' className='input input-bordered' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#06D6C6] hover:bg-[#06D6C6] text-white font-bold text-lg">Sign up</button>
                            </div>
                            {
                                error && <p className="text-red-800 text-base">{error}</p>
                            }
                            <Link to={'/signIn'}><p>Already have account? <span className='text-[#06D6C6]'>Sign in</span></p></Link>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignUp;