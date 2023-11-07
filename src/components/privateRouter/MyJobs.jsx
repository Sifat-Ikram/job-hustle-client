import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MyJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs);
    return (
        <div className='space-y-10'>
            <Header></Header>
            <div> 
                <h1 className='text-5xl font-semibold text-left mb-10'>My Jobs</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 gap-10'> 
                {
                    jobs.map(job => <div key={job._id} className='flex items-center gap-8 bg-base-200 p-3  border-2 border-[#06D6C6] border-solid rounded-md'>
                       <div>
                          <img src={job.photo} className='w-40 h-40 rounded-md' alt="" />
                       </div>
                       <div className='text-left space-y-1 flex flex-col'>
                            <h1 className='text-2xl font-bold'>{job.title}</h1>
                            <h1 className='text-base font-semibold'>Posted by: {job.username}</h1>
                            <h1 className='text-base font-semibold'>Salary: {job.salary_range}</h1>
                            <h1 className='text-base font-semibold'>Applicants: {job.applicant_number}</h1>
                            <h1 className='text-base font-semibold'>Posted on: {job.posting_date}</h1>
                            <h1 className='text-base font-semibold'>Deadline: {job.deadline}</h1>
                       </div> 
                    </div>
                    )
                }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyJobs;