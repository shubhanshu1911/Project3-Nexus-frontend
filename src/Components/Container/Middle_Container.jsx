import React from 'react'
import StarIcon from '@mui/icons-material/Star';

function Middle_Container() {
    return (
        <div className="middle-container">
            <div className='middle-left'>
                <h2>What We Offer</h2>
                <img src='Images/middlephoto.webp' alt='networking phtot'></img>
            </div>
            <div className='middle-right'>
                <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '5px' }}>
                    <li><StarIcon />AI-Powered Networking Solutions: Our advanced networking solutions are powered by artificial intelligence algorithms, enabling intelligent automation, optimization, and security in networking operations.</li>                   
                    <li><StarIcon />Scalable Infrastructure: We provide scalable infrastructure solutions tailored to the unique needs of your organization, ensuring reliability, performance, and flexibility to support your growth.</li>
                    <li><StarIcon />Data-driven Insights: Gain valuable insights into your network performance and user behavior through our data analytics capabilities, allowing you to make informed decisions and drive business success.</li>
                </ul>
            </div>
        </div>
    )
}

export default Middle_Container
