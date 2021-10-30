import React, { useEffect } from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Destinations from '../Destinations/Destinations';
import Hero from '../Hero/Hero';

const Home = () => {
    //change the title when change the route
    useEffect(() => {
        document.title = 'Pacific Travel Agency';
    }, []);
    return (
        <div>
            <Hero></Hero>
            <Destinations></Destinations>
            <About></About>
            <Blog></Blog>
        </div>
    );
};

export default Home;