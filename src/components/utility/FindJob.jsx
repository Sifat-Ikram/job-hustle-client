import React from 'react';
import find from '../../assets/findjob.PNG';
import { Link } from 'react-router-dom';

const FindJob = () => {
    return (
        <div>
            <div className="hero bg-base-200 p-0">
                <div className="flex items-center flex-col lg:flex-row gap-5">
                    <img src={find} className="w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Create free account and start apply your dream job today</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to={'/signUp'}><button className='btn hover:bg-[#06D6C6] bg-[#06D6C6]  rounded-md text-base font-semibold text-white px-3'>Sign up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindJob;