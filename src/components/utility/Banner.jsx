import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/Pct4xB9/job-portal-banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold font-joseph">Find Your Dream Job</h1>
                        <p className="mb-5">Job hustle is a platform of thousands of jobs. Just search category or job name and find your job. Start your career today from here</p>
                        <div className='flex items-center'>
                            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                            <button className="btn btn-accent text-white font-semibold">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;