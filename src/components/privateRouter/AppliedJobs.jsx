import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';

const AppliedJobs = () => {

    const jobs = useLoaderData();
    
    const [appliedJobs, setAppliedJobs] = useState([]);

    const getSavedJob = () =>{
        const savedJob = localStorage.getItem('job-id');
        if(savedJob){
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
    console.log(appliedJobs);
    return (
        <div className="space-y-10">
            <Header></Header>
            <div>
                <h1 className="text-5xl font-semibold text-left mb-10">Applied Jobs</h1>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-10">
                    {
                        appliedJobs.map(item => <CartItem key={item._id} item={item}></CartItem>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AppliedJobs;