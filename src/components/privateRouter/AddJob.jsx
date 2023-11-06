import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';


const AddJob = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const username = form.username.value;
        const jobTitle = form.jobTitle.value;
        const jobCat = form.jobCat.value;
        const salary = form.salary.value;
        const jobDate = form.jobDate.value;
        const deadline = form.deadline.value;
        const applicant = form.applicant.value;
        const photo = form.photo.value;
        const description = form.description.value;

        const newJob = { username, jobTitle, jobCat, salary, jobDate, deadline, applicant, photo, description };
        
        fetch('http://localhost:4321/', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            <div className='space-y-10'>
                <Header></Header>
                <div>
                    <div className="w-4/5 mx-auto bg-[#06D6C6] rounded-lg border-2 border-b-8 border-solid border-b-[#06D6C6]">
                        <div className="text-center py-10">
                            <h1 className="text-5xl font-bold">Add Job here</h1>
                        </div>
                        <div>
                            <form onSubmit={handleAddProduct}  className="card-body space-y-5 bg-base-100">
                                <div className='lg:flex justify-between gap-4 '>
                                    <div className='form-control lg:w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>User Name</span>
                                        </label>
                                        <input type="text" name='username' placeholder='Type your Name' className='input input-bordered'  />
                                    </div>
                                    <div className='form-control lg:w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>Job Title</span>
                                        </label>
                                        <input type="text" name='jobTitle' placeholder='Type Job Title' className='input input-bordered'  />
                                    </div>
                                </div>
                                <div className='lg:flex justify-between gap-4'>
                                    <div className='form-control lg:w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>Job Category</span>
                                        </label>
                                        <input type="text" name='jobCat' placeholder='Type job category' className='input input-bordered'  />
                                    </div>
                                    <div className='form-control lg:w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>Salary range</span>
                                        </label>
                                        <input type="text" name='salary' placeholder='Type salary range' className='input input-bordered'  />
                                    </div>
                                </div>
                                <div className='lg:flex justify-between gap-4'>
                                    <div className='form-control lg:w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>Job Posting Date</span>
                                        </label>
                                        <input type="date" name='jobDate' placeholder='Type your job posting Date' className='input input-bordered' />
                                    </div>
                                    <div className='form-control lg:w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>Application Deadline</span>
                                        </label>
                                        <input type="date" name='deadline' placeholder='Type deadline' className='input input-bordered' />
                                    </div>
                                </div>
                                <div className='lg:flex justify-between gap-4'>
                                    <div className='form-control lg:w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>Job Applicants Number</span>
                                        </label>
                                        <input type="text" name='applicant' placeholder='Type applicant number'  className='input input-bordered' />
                                    </div>
                                    <div className='form-control lg:w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>Photo Url</span>
                                        </label>
                                        <input type="text" name='photo' placeholder='Type photo url' className='input input-bordered' />
                                    </div>
                                </div>
                                <div className='w-3/4 mx-auto'>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Description</span>
                                        </label>
                                        <textarea name='description'  className="textarea textarea-ghost" placeholder="Description"></textarea>
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <button type='submit' className="btn bg-[#06D6C6] hover:bg-[#06D6C6] font-bold text-lg">Add Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AddJob;