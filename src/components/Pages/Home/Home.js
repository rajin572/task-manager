import React from 'react';
import About from './About/About';
import AddTask from './AddTask/AddTask';
import Banner from './Banner/Banner';
import Status from './Status/Status';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AddTask></AddTask>
            <Status></Status>
        </div>
    );
};

export default Home;