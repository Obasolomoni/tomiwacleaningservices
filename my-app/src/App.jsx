import React from 'react';
import Navbar from './Navbar.jsx';
import Hero from './Hero.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import Testimonial from './Testimonial.jsx'
import Footer from './Footer.jsx';
import './App.css';

export default function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
}