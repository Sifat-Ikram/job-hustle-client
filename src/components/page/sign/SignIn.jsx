import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { AuthContext } from '../../provider/AuthProvider'; 
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';

const SignIn = () => {
    const { signIn, googleSignUp } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [ error, setError ] = useState('');
    const [ success, setSuccess ] = useState('');


    const handleGoogle = () =>{
        googleSignUp()
        .then(res =>{
            console.log(res.user);
        })
        .catch(err =>{
            console.error(res.message);
        })
    }

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(res =>{
            console.log(res.user);
            navigate(location?.state ? location.state : '/');
            setSuccess();
        })
        .catch(err =>{
            setError(err.message);
        })
    }
    return (
        <div className='space-y-10'>
            <Helmet>
                <title>Job hustle | Sign in</title>
            </Helmet>
            <Header></Header>
            <div>
                <div className="w-1/2 mx-auto bg-[#06D6C6] rounded-lg border-2 border-b-8 border-solid border-b-[#06D6C6]">
                    <div className="text-center py-10">
                        <h1 className="text-5xl font-bold">Sign in now!</h1>
                    </div>
                    <div>
                        <form onSubmit={handleSignIn} className="card-body space-y-5 bg-base-100">
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
                                <button className="btn bg-[#06D6C6] hover:bg-[#06D6C6] font-bold text-lg">Sign in</button>
                            </div>
                            {
                                error && <p className='text-red-800 text-base'>{error}</p>
                            }
                            <Link to={'/signUp'}><p>Don't have an account? <span className='text-[#06D6C6]'>Sign up</span></p></Link>
                            <div className='flex justify-center items-center bg-white mb-10'>
                                <button onClick={handleGoogle} className='btn btn-outline border-[#06D6C6] hover:bg-[#06D6C6] w-1/2 flex justify-center gap-5 text-black text-2xl font-bold'><FcGoogle></FcGoogle> Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SignIn;