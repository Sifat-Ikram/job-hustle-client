import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Swal from 'sweetalert2';

const MyJobs = () => {
    const getJobs = useLoaderData();

    const [ jobs, setJobs ] = useState(getJobs);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4321/allJobs/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "This job has been deleted.",
                                icon: "success"
                            });
                            const rest = jobs.filter(job => job._id !== _id);
                            setJobs(rest);
                        }
                    })
            }
        })
    }

    return (
        <div className='space-y-10'>
            <Header></Header>
            <div> 
                <h1 className='text-5xl font-semibold text-left mb-10'>My Jobs</h1>
                <div className='flex flex-col items-center mt-10 gap-10'> 
                {
                    jobs.map(job => <div key={job._id} className='flex w-3/5 justify-between items-center gap-8 bg-base-200 p-7  border-2 border-[#06D6C6] border-solid rounded-md'>
                       <div className='flex space-x-10 w-2/3'>
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
                        <div className='space-y-5'>
                            <Link to={`/update/${job._id}`}><button className='btn btn-outline hover:bg-[#06D6C6] border-accent text-black font-bold text-lg rounded-md'><AiOutlineEdit></AiOutlineEdit></button></Link>
                            <br />
                            <button onClick={() => handleDelete(job._id)} className='btn btn-outline hover:bg-[#06D6C6] border-accent text-black font-bold text-lg rounded-md'><AiOutlineDelete></AiOutlineDelete></button>
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