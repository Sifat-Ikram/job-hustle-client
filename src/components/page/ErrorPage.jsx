import React from 'react';
import error from '../../assets/png-transparent-error-404-404-error.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-20 space-y-5'>
            <img src={error} alt="" className='w-1/2' />
            <Link to={'/'}><button className='btn btn-outline btn-accent hover:bg-[#06D6C6] text-white font-semibold'>Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;