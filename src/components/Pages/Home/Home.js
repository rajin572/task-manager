import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Status from './Status/Status';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Status></Status>
        </div>
    );
};

export default Home;