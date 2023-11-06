import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const JobCategory = () => {
    const [toggle, setToggle] = useState('all');

    const handleToggle = cat => {
        setToggle(cat);
    }
    return (
        <div className='w-11/12 mx-auto space-y-10'>
            <h1 className='text-3xl font-bold text-left'> Job Category</h1>
            <div>
                <ul className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-10 rounded-sm justify-evenly  bg-base-300 p-4 border-[#06D6C6] border-2 border-solid'>
                    <li><NavLink onClick={() => handleToggle('all')}
                        style={({ isActive }) => ({ background: isActive ? "" : "" })}
                        className="text-center font-bold text-black p-4">All Jobs</NavLink></li>

                    <li><NavLink onClick={() => handleToggle('onSite')}
                        style={({ isActive }) => ({ background: isActive ? "" : "" })}
                        className="text-center font-bold text-black p-4 ">On Site</NavLink></li>

                    <li><NavLink onClick={() => handleToggle('remote')}
                        style={({ isActive }) => ({ background: isActive ? "" : "" })}
                        className="text-center font-bold text-black p-4 ">Remote</NavLink></li>

                    <li><NavLink onClick={() => handleToggle('hybrid')}
                        style={({ isActive }) => ({ background: isActive ? "" : "" })}
                        className="text-center font-bold text-black p-4 ">Hybrid</NavLink></li>

                    <li><NavLink onClick={() => handleToggle('partTime')}
                        style={({ isActive }) => ({ background: isActive ? "" : "" })}
                        className="text-center font-bold text-black p-4">Part Time</NavLink></li>
                </ul>
                <div className='mt-10'>
                    <div className={toggle === "all" ? 'block' : 'hidden'}>
                        <h1>All Jobs</h1>
                        <p>A Software Engineer is an IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization. We are looking for a talented software engineer to join our team.</p>
                    </div>
                    <div className={toggle === "onSite" ? 'block' : 'hidden'}>
                        <h1>On Site</h1>
                        <p>A Software Engineer is an IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization. We are looking for a talented software engineer to join our team.</p>
                    </div>
                    <div className={toggle === "remote" ? 'block' : 'hidden'}>
                        <h1>Remote</h1>
                        <p>A Software Engineer is an IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization. We are looking for a talented software engineer to join our team.</p>
                    </div>
                    <div className={toggle === "hybrid" ? 'block' : 'hidden'}>
                        <h1>Hybrid</h1>
                        <p>A Software Engineer is an IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization. We are looking for a talented software engineer to join our team.</p>
                    </div>
                    <div className={toggle === "partTime" ? 'block' : 'hidden'}>
                        <h1>Part Time</h1>
                        <p>A Software Engineer is an IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization. We are looking for a talented software engineer to join our team.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;