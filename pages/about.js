import React, { useContext } from 'react';
// import About from '../Component/About/About';
import { AppProvider, useProductContext } from '../Component/Context/ProductContex';
import Home from '../Component/Home/Home';
import Navbar from '../Component/Navbar/Navbar';

const About = () => {
    const number = [7,6,3,4,6];
    console.log(number.slice(0,1))
   

    return (
        <div>
           
            <Navbar></Navbar>
            <Home data={'Product'}></Home>
            
        </div>
    );
};

export default About;