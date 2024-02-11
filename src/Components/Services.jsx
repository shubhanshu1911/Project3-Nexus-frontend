// Services.js
import React from 'react';
import "./services.css";
import Contact from './Contact';

function Services() {
    return (
        <section id="services">
            <h2 style={{"padding" : "25px"}}>Our Services</h2>
            <div className="container">
                <div className='container-lefts'>
                    <img src='./Images/innovationPic.png' alt='innovation Pic' className='Image3' />
                    Innovation: We are at the forefront of innovation, constantly pushing the boundaries of what's possible with AI-driven networking technologies.
                </div>
                <div className='container-middles'>
                    <img src='./Images/rel4.jpg' alt='reliability Pic' className='Image3' />
                    Reliability: With a focus on reliability and performance, we deliver robust networking solutions that you can trust to keep your business running smoothly.
                </div>

                <div className='container-rights'>
                    <img src='./Images/pic-experience.jpg' alt='experience Pic' className='Image3' />
                    Expertise: Our team of experienced professionals brings deep expertise in networking, artificial intelligence, and data analytics to deliver exceptional results for our clients.
                </div>
            </div>

            <Contact/>
        </section>
    );
}

export default Services;
