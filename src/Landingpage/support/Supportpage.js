import React from 'react';
import Hero from './Hero';
import Createticket from './Createticket';
import Footer from '../Footer';
import Navbar from '../Navbar';

function Supportpage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <Createticket/>
        <Footer/>
        </>
    );
}