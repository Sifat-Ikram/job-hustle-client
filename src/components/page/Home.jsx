import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FindJob from '../utility/FindJob';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../utility/JobCategory';
import Banner from '../utility/Banner';

const Home = () => {
    const jobs = useLoaderData();
    return (
        <div className='space-y-20'>
            <div className='space-y-5'>
                <Header></Header>
                <Banner></Banner>
            </div>
            <JobCategory jobs={jobs}></JobCategory>
            <FindJob></FindJob>
            <Footer></Footer>
        </div>
    );
};

export default Home;