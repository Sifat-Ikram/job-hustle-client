import React, { useEffect, useState } from 'react';
import { NavLink, Link, useParams } from 'react-router-dom';


const JobCategory = (jobs) => {
    const [toggle, setToggle] = useState('all');
    const [categories, setCategories] = useState('');
    const handleToggle = cat => {
        setToggle(cat);
    }


    const getOnSiteJob = () => {
        if (jobs.jobs) {
            return jobs.jobs.filter(item => item.work_type === 'On Site');
        }
    }
    const onSiteJobs = getOnSiteJob();

    const getRemoteJob = () => {
        if (jobs.jobs) {
            return jobs.jobs.filter(item => item.work_type === 'Remote');
        }
    }
    const remoteJobs = getRemoteJob();

    const getHybridJob = () => {
        if (jobs.jobs) {
            return jobs.jobs.filter(item => item.work_type === 'Hybrid');
        }
    }
    const hybridJobs = getHybridJob();

    const getPartTimeJob = () => {
        if (jobs.jobs) {
            return jobs.jobs.filter(item => item.work_type === 'Part-Time');
        }
    }

    const partTimeJobs = getPartTimeJob();

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
                <div className='mt-3'>
                    <div className={toggle === "all" ? 'block' : 'hidden'}>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                            {
                                jobs.jobs.map(job => <div key={job._id} className='flex items-center gap-8  bg-base-200 py-3 px-5 border-2 border-[#06D6C6] border-solid rounded-md'>
                                    <div>
                                        <img src={job.photo} className='w-40 h-40 rounded-md' alt="" />
                                    </div>
                                    <div className='text-left space-y-1 font flex-col'>
                                        <h1 className='text-2xl font-bold'>{job.title}</h1>
                                        <h1 className='text-base font-semibold'>Posted by: {job.username}</h1>
                                        <h1 className='text-base font-semibold'>Salary: {job.salary_range}</h1>
                                        <p className='text-base font-semibold'>Applicants: {job.applicant_number}</p>
                                        <h2 className='text-base font-semibold'>Posted on: {job.posting_date}</h2>
                                        <h2 className='text-base font-semibold'>Deadline: {job.deadline}</h2>
                                        <div className='flex justify-end'>
                                            <Link to={`/details/${job._id}`}><button className='btn btn-outline border-accent rounded-md hover:bg-[#06C6D6]'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className={toggle === "onSite" ? 'block' : 'hidden'}>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                            {
                                onSiteJobs.map(job => <div key={job._id} className='flex items-center gap-8  bg-base-200 py-3 px-5 border-2 border-[#06D6C6] border-solid rounded-md'>
                                    <div>
                                        <img src={job.photo} className='w-40 h-40 rounded-md' alt="" />
                                    </div>
                                    <div className='text-left space-y-1 font flex-col'>
                                        <h1 className='text-2xl font-bold'>{job.title}</h1>
                                        <h1 className='text-base font-semibold'>Posted by: {job.username}</h1>
                                        <h1 className='text-base font-semibold'>Salary: {job.salary_range}</h1>
                                        <p className='text-base font-semibold'>Applicants: {job.applicant_number}</p>
                                        <h2 className='text-base font-semibold'>Posted on: {job.posting_date}</h2>
                                        <h2 className='text-base font-semibold'>Deadline: {job.deadline}</h2>
                                        <div className='flex justify-end'>
                                            <Link to={`/details/${job._id}`}><button className='btn btn-outline border-accent rounded-md hover:bg-[#06C6D6]'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={toggle === "remote" ? 'block' : 'hidden'}>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                            {
                                remoteJobs.map(job => <div key={job._id} className='flex items-center gap-8  bg-base-200 py-3 px-5 border-2 border-[#06D6C6] border-solid rounded-md'>
                                    <div>
                                        <img src={job.photo} className='w-40 h-40 rounded-md' alt="" />
                                    </div>
                                    <div className='text-left space-y-1 font flex-col'>
                                        <h1 className='text-2xl font-bold'>{job.title}</h1>
                                        <h1 className='text-base font-semibold'>Posted by: {job.username}</h1>
                                        <h1 className='text-base font-semibold'>Salary: {job.salary_range}</h1>
                                        <p className='text-base font-semibold'>Applicants: {job.applicant_number}</p>
                                        <h2 className='text-base font-semibold'>Posted on: {job.posting_date}</h2>
                                        <h2 className='text-base font-semibold'>Deadline: {job.deadline}</h2>
                                        <div className='flex justify-end'>
                                            <Link to={`/details/${job._id}`}><button className='btn btn-outline border-accent rounded-md hover:bg-[#06C6D6]'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={toggle === "hybrid" ? 'block' : 'hidden'}>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                            {
                                hybridJobs.map(job => <div key={job._id} className='flex items-center gap-8  bg-base-200 py-3 px-5 border-2 border-[#06D6C6] border-solid rounded-md'>
                                    <div>
                                        <img src={job.photo} className='w-40 h-40 rounded-md' alt="" />
                                    </div>
                                    <div className='text-left space-y-1 font flex-col'>
                                        <h1 className='text-2xl font-bold'>{job.title}</h1>
                                        <h1 className='text-base font-semibold'>Posted by: {job.username}</h1>
                                        <h1 className='text-base font-semibold'>Salary: {job.salary_range}</h1>
                                        <p className='text-base font-semibold'>Applicants: {job.applicant_number}</p>
                                        <h2 className='text-base font-semibold'>Posted on: {job.posting_date}</h2>
                                        <h2 className='text-base font-semibold'>Deadline: {job.deadline}</h2>
                                        <div className='flex justify-end'>
                                            <Link to={`/details/${job._id}`}><button className='btn btn-outline border-accent rounded-md hover:bg-[#06C6D6]'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={toggle === "partTime" ? 'block' : 'hidden'}>
                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                            {
                                partTimeJobs.map(job => <div key={job._id} className='flex items-center gap-8  bg-base-200 py-3 px-5 border-2 border-[#06D6C6] border-solid rounded-md'>
                                    <div>
                                        <img src={job.photo} className='w-40 h-40 rounded-md' alt="" />
                                    </div>
                                    <div className='text-left space-y-1 font flex-col'>
                                        <h1 className='text-2xl font-bold'>{job.title}</h1>
                                        <h1 className='text-base font-semibold'>Posted by: {job.username}</h1>
                                        <h1 className='text-base font-semibold'>Salary: {job.salary_range}</h1>
                                        <p className='text-base font-semibold'>Applicants: {job.applicant_number}</p>
                                        <h2 className='text-base font-semibold'>Posted on: {job.posting_date}</h2>
                                        <h2 className='text-base font-semibold'>Deadline: {job.deadline}</h2>
                                        <div className='flex justify-end'>
                                            <Link to={`/details/${job._id}`}><button className='btn btn-outline border-accent rounded-md hover:bg-[#06C6D6]'>View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;