import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';

const AllJobs = () => {

    const allJob = useLoaderData();

    console.log(allJob);

    return (
        <div className='space-y-10'>
            <Header></Header>
            <div className='w-11/12 mx-auto'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    {
                        allJob.map(job => <div key={job._id} className='flex items-center gap-8  bg-base-200 py-3 px-5 border-2 border-[#06D6C6] border-solid rounded-md'>
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
                                    <Link><button className='btn btn-outline border-accent rounded-md hover:bg-[#06C6D6]'>View Details</button></Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllJobs;