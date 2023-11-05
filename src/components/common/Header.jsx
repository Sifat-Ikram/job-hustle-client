import React, { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import job from '../../assets/job2.PNG';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(res => console.log(res.user))
        .catch(err => console.error(err.message))
    }

    const navLinks = <>
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/'}>Home</NavLink></li>
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/allJob'}>All Jobs</NavLink></li>
        {
            user && <>
            <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/appliedJob'}>Applied Jobs</NavLink></li>
            <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/myJob'}>My Jobs</NavLink></li>
            <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/addJob'}>Add A Job</NavLink></li>
            </>
        }
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/blog'}>Blog</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar items-center w-full">
                <div className="navbar-start">
                    <div className="dropdown flex lg:hidden mt-3 items-center">
                        <label tabIndex={0} className="btn btn-ghost h-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#06D6C6] font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm gap-2 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img src={job} className="h-20 w-24 bg-white" alt="" />
                    <a href="/" className="h-full normal-case font-semibold text-5xl font-joseph"><span className='text-[#06D6C6]'>Job</span><span className='text-warning'>Hustle</span></a>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1 gap-1 ml-5 hidden lg:flex">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end pt-4">
                    {
                        user ?
                            <div className="flex gap-3 items-center">
                                <img src={user.photoURL} className="h-16 w-16 rounded-full" alt={user.displayName} />
                                <button onClick={handleLogOut} className="btn bg-[#06D6C6] hover:bg-[#06D6C6] text-lg font-bold">Sign out</button>
                            </div>
                            :
                            <Link to={"/signIn"}><button className="btn bg-[#06D6C6] hover:bg-[#06D6C6] text-lg font-bold">Sign in</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;