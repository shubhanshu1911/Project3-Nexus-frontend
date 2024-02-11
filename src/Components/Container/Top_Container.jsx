import React from 'react'

export default function Top_Container() {
    return (

        <div className="top-container">
            <video autoPlay loop muted className="video-background">
                <source src="Images/bgvid.mp4" type="video/mp4" />
                {/* You can add additional <source> elements for different video formats */}
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>Networking.Ai</h1>
                <p>At Networking.ai, we specialize in leveraging artificial intelligence to revolutionize networking solutions. Our cutting-edge technology empowers businesses and individuals to streamline networking processes, enhance connectivity, and unlock new opportunities in the digital landscape.</p>
            </div>
        </div>

    )
}
