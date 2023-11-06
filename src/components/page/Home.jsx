import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import FindJob from '../utility/FindJob';

const Home = () => {
    return (
        <div className='space-y-20'>
            <Header></Header>
            <FindJob></FindJob>
            <Footer></Footer>
        </div>
    );
};

export default Home;