import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FindJob from '../utility/FindJob';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../utility/JobCategory';
import Banner from '../utility/Banner';
import { Helmet } from 'react-helmet-async';
import Company from '../utility/Company';

const Home = () => {
    const jobs = useLoaderData();
    return (
        <div className='space-y-20'>
            <Helmet>
                <title>Job hustle | Home</title>
            </Helmet>
            <div className='space-y-5'>
                <Header></Header>
                <Banner></Banner>
            </div>
            <JobCategory jobs={jobs}></JobCategory>
            <FindJob></FindJob>
            <Company></Company>
            <Footer></Footer>
        </div>
    );
};

export default Home;