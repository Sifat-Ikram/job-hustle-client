import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Swal from 'sweetalert2';

const JobDetails = () => {

    const jobs = useLoaderData();
    console.log(jobs);
    const { id } = useParams();

    const job = jobs.find(job => job._id === id)
    const { _id, title, username, photo, category, work_type, salary_range, posting_date, deadline, applicant_number, description } = job;

    const getSavedJob = () => {
        const savedJob = localStorage.getItem('job-id');
        if (savedJob) {
            return JSON.parse(savedJob);
        }
        return [];
    }

    const handleApply = () => {
        const storedJob = id => {
            const savedJob = getSavedJob();
            const ifExist = savedJob.find(JobId => JobId === id);
            if (!ifExist) {
                savedJob.push(id);
                localStorage.setItem('job-id', JSON.stringify(savedJob));
                Swal.fire({
                    title: 'Success',
                    text: 'Job added successfully!!!',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
            }
            else {
                Swal.fire({
                    title: '',
                    text: 'This job is already here.',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
            }
        }

        storedJob(_id);
    }

    return (
        <div className='space-y-10'>
            <Header></Header>
            <div className="w-10/12 mx-auto mt-10 text-left space-y-8">
                <img src={photo} className="h-96 w-full" alt="" />
                <h1 className="font-semibold text-4xl">{title}</h1>
                <div className=''>
                    <h1 className="text-lg font-medium">Salary: {salary_range}</h1>
                    <h1 className="text-lg font-medium">Work Type: {work_type}</h1>
                    <h1 className="text-base font-medium">Number of Applicants: {applicant_number}</h1>
                </div>
                <h1 className="text-base"><span className="text-2xl font-medium">Description: </span>{description}</h1>
                <div className=" flex justify-between">
                    <p className="text-base font-normal">Date of post: {posting_date}</p>
                    <p className="text-base font-normal">Deadline: {deadline}</p>
                </div>
                <div className='flex justify-center'>
                    <button onClick={handleApply} className="btn bg-[#06D6C6] hover:bg-[#06D6C6] font-semibold text-base">Apply for this job</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;