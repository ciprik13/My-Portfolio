import React from 'react';
import './Hero.css';
import Ciprian from '../../assets/CiprianTekwill.jpg';

const Hero = () => {
  return (
    <div className='hero'>
      <img className='ciprian-img' src={Ciprian} alt="CiprianTekwill" />
      <h1><span>Ciprian Moisenco,</span> Frontend Developer.</h1>
      <p>I'm a Frontend Developer. I love to code.</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;
