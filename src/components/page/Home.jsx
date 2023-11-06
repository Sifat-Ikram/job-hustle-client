import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FindJob from '../utility/FindJob';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../utility/JobCategory';

const Home = () => {

    return (
        <div className='space-y-20'>
            <Header></Header>
            <JobCategory></JobCategory>
            <FindJob></FindJob>
            <Footer></Footer>
        </div>
    );
};

export default Home;