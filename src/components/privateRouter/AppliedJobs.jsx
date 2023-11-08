import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Helmet } from 'react-helmet-async';

const AppliedJobs = () => {
    // const [jobs, setJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);
    const jobs = useLoaderData();

    const getSavedJob = () => {
        const savedJob = localStorage.getItem('job-id');
        if (savedJob) {
            return JSON.parse(savedJob);
        }
        return [];
    }

    useEffect(() => {
        const savedJobId = getSavedJob();
        if (jobs.length) {
            const savedJob = [];
            for (const id of savedJobId) {
                const job = jobs.find(job => job._id === id);
                if (job) {
                    savedJob.push(job);
                }
            }

            setAppliedJobs(savedJob);
        }

    }, [])
    return (
        <div className="space-y-10">
            <Helmet>
                <title>Job hustle | Applied Jobs</title>
            </Helmet>
            <Header></Header>
            <div>
                <h1 className="text-5xl font-semibold text-left mb-10">Applied Jobs</h1>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-10">
                    {
                        appliedJobs.map(job => <div key={job._id} className='flex items-center gap-8  bg-base-200 py-3 px-5 border-2 border-[#06D6C6] border-solid rounded-md'>
                            <div>
                                <img src={job.photo} className='w-40 h-40 rounded-md' alt="" />
                            </div>
                            <div className='text-left space-y-1 flex-col'>
                                <h1 className='text-2xl font-bold'>{job.title}</h1>
                                <h1 className='text-base font-semibold'>Posted by: {job.username}</h1>
                                <h1 className='text-base font-semibold'>Salary: {job.salary_range}</h1>
                                <p className='text-base font-semibold'>Applicants: {job.applicant_number}</p>
                                <h2 className='text-base font-semibold'>Posted on: {job.posting_date}</h2>
                                <h2 className='text-base font-semibold'>Deadline: {job.deadline}</h2>
                                <div className='flex justify-end'>
                                    <Link to={`/appliedJobDetails/${job._id}`}><button className='btn bg-[#06C6D6] rounded-md hover:bg-[#06C6D6] text-white font-semibold'>View Details</button></Link>
                                </div>
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

export default AppliedJobs;