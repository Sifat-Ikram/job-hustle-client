import React from 'react';
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import job from '../../assets/job2.PNG';

const Header = () => {
    // const handleSignOut = () => {
        
    // }

    const navLinks = <>
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/'}>Home</NavLink></li>
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/addProduct'}>Add Product</NavLink></li>
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/myCart'}>My Cart</NavLink></li>
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/about'}>About us</NavLink></li>
        <li><NavLink style={({ isActive }) => ({ background: isActive ? "#06D6C6" : "" })} className="hover:bg-[#06D6C6] hover:text-white font-bold text-[#06D6C6] rounded-md" to={'/signIn'}>Sign in</NavLink></li>
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
                    <img src={job} className="h-24 w-32 bg-white" alt="" />
                    <a href="/" className="h-full normal-case font-semibold text-6xl font-joseph"><span className='text-[#06D6C6]'>Job</span><span className='text-warning'>Hustle</span></a>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1 gap-1 ml-5 hidden lg:flex">
                        {navLinks}
                    </ul>
                </div>
                {/* <div className="navbar-end pt-4">
                    {
                        user ?
                            <div className="flex gap-3 items-center">
                                <img src={user.photoURL} className="h-16 w-16 rounded-full" alt="" />
                                <button onClick={handleSignOut} className="btn btn-primary text-lg font-semibold">Sign out</button>
                            </div>
                            :
                            <Link to={"/signUp"}><button className="btn btn-primary text-lg font-semibold">Sign up</button></Link>

                    }
                </div> */}
            </div>
        </div>
    );
};

export default Header;