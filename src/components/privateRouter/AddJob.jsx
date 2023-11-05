import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
// Picture URL of the Job Banner,
//     - Job Title,
//         - Logged In User Name.
// - Job Category(For example: On Site, Remote, Part - Time, Hybrid)
//     - Salary range,
//         - Job Description,
//             - Job Posting Date
//                 - Application Deadline Use the[Date Picker Package]
// - Job Applicants Number(by default it will be 0)
const AddJob = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const username = form.username.value;
        const jobTitle = form.jobTitle.value;
        const photo = form.photoUrl.value;
        const photo = form.photoUrl.value;
        const photo = form.photoUrl.value;
        const photo = form.photoUrl.value;
        const photo = form.photoUrl.value;
        const photo = form.photoUrl.value;
        const photo = form.photoUrl.value;
    }
    return (
        <div>
            <div className='space-y-10'>
                <Header></Header>
                <div>
                    <div className="w-4/5 mx-auto bg-[#06D6C6] rounded-lg border-2 border-b-8 border-solid border-b-[#06D6C6]">
                        <div className="text-center py-10">
                            <h1 className="text-5xl font-bold">Add Product here</h1>
                        </div>
                        <div>
                            <form  className="card-body space-y-5 bg-base-100">
                                <div className='flex justify-between gap-4'>
                                    <div className='form-control w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>User Name</span>
                                        </label>
                                        <input type="text" name='username' placeholder='Type your Name' className='input input-bordered' required />
                                    </div>
                                    <div className='form-control w-1/2'>
                                        <label className='label'>
                                            <span className='label-text'>Job Title</span>
                                        </label>
                                        <input type="text" name='jobTitle' placeholder='Type Job Title' className='input input-bordered' required />
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder='Type your email' className='input input-bordered' required />
                                    </div>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder='Type your email' className='input input-bordered' required />
                                    </div>
                                </div>
                                {/* <div>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder='Type your email' className='input input-bordered' required />
                                    </div>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder='Type your email' className='input input-bordered' required />
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder='Type your email' className='input input-bordered' required />
                                    </div>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder='Type your email' className='input input-bordered' required />
                                    </div>
                                </div>
                                <div>
                                    <div className='form-control'>
                                        <label className='label'>
                                            <span className='label-text'>photo Url</span>
                                        </label>
                                        <input type="text" name='photoUrl' placeholder='Type your email' className='input input-bordered' required />
                                    </div>
                                </div> */}
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#06D6C6] hover:bg-[#06D6C6] font-bold text-lg">Sign in</button>
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