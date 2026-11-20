import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Education from './Education';
import Pricing from './pricing';
import OpenAcc from '../OpenAcc';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Homepage() {
    return (
    <>

    <Navbar/>
    <Hero/>
    <Awards/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAcc/>
    <Footer/>
    
    </> );
}

export default Homepage;