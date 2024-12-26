import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Ciprian from '../../assets/CiprianTekwill.jpg';


const About = () => {
  return (
    <div className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={Ciprian} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Ciprian Moisenco is a student specializing in Software Engineering. He is gaining practical experience through various projects, including front-end development using React, creating user interfaces, managing admin dashboards, and implementing features like calendars, user reviews, and user management interfaces.</p>
                    <p>Ciprian has also worked in roles related to order processing and billing in local businesses and has skills in HTML, CSS, JavaScript, and Java.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}  /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}  /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}  /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>5+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>3+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>8+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default About