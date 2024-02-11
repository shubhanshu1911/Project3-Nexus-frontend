// About.js
import React from 'react';
import "./About.css";
import Contact from './Contact';

function About() {
    return (
        <section id="about">
            <div className="container">
                <div className='container-left'>
                    <h2>About Us</h2>
                    <img src="./Images/aboutPic.png" alt="About" className='Images' />
                </div>
                <div className='container-right'>
                    <p>At Networking.ai, we are passionate about revolutionizing networking solutions through the power of artificial intelligence. Our journey began with a vision to transform traditional networking paradigms and create smarter, more efficient networking systems for businesses and individuals worldwide.</p>
                </div>
            </div>

            <div className='container'>
                <div className='container-left'>
                    <h2>Our Mission</h2>
                    <img src="./Images/missionImg.jpg" alt="Mission" className='Images' />
                </div>
                <div className='container-right'>
                    <p>Our mission is to empower organizations and individuals to harness the full potential of artificial intelligence in networking. We strive to democratize access to cutting-edge networking technologies, enabling our clients to stay ahead of the curve in an increasingly digital world.</p>
                </div>
            </div>

            <div className='container'>
                <div className='container-left'>
                    <h2>What Sets Us Apart</h2>
                    <img src='./Images/innovationPic.png' alt='innovation Pic' className='Image2' />
                </div>
                <div className='container-right'>
                    Innovative Approach: We are committed to innovation, constantly exploring new ways to integrate AI into networking processes and drive unprecedented levels of efficiency and performance.
                </div>
            </div>

            <div className='container'>
                <div className='container-left' style={{ fontFamily: 'Poppins', fontSize: "25px", Padding: "40%" }}>
                    Expertise and Experience: With years of experience in networking, artificial intelligence, and data analytics, our team brings a wealth of expertise to every project, ensuring exceptional results and client satisfaction.
                </div>
                <div className='container-right'>
                    <img src='./Images/pic-experience.jpg' alt='experience Pic' className='Image2' />
                </div>
            </div>

            <div className='container'>
                <div className='container-left'>
                    <img src='./Images/customer-centric.jpg' alt='Customer Pic' className='Image2' />
                </div>
                <div className='container-right'>
                    Customer-Centric Focus: We prioritize the needs and objectives of our clients, working closely with them to understand their unique challenges and deliver customized solutions that exceed their expectations.
                </div>
            </div>

            <Contact/>
        </section>
    );
}

export default About;
