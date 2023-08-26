import React from 'react';
import Navbar from '../Components/Landing/Navbar';
import Hero from '../Components/Landing/Hero';
import Utility from '../Components/Landing/Utility';
import Princing from '../Components/Landing/Princing';


const Landing = () => {
  return (
    <div>
    <Navbar />
   <Hero />
  <Utility />
  <Princing />
    </div>
  );
}

export default Landing;
