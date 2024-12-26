import React from 'react'
import './Footer.css'
import mc from '../../assets/mc-bad-quality.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='mc-img' src={mc} alt="" />
                <p>I am a frontend developer based in Chișinău, Moldova. I have a passion for creating beautiful and functional web platforms.</p>
            </div>
            <div className="footer-top-right">
                <div className='footer-email-input'>
                    <img src={user_icon} alt=''/>
                    <input type='email' placeholder='Enter your email address'/>
                </div>
                <div className='footer-subscribe'>Subscribe</div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p className="footer-bottom-left">2025 &copy;  Ciprian Moisenco. All rights deserved.</p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer