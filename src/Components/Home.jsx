import React from 'react';
import "./home.css";
import TopContainer from './Container/Top_Container';
import MiddleContainer from './Container/Middle_Container';
import BottomContainer from './Container/Bottom_Container';

function Home() {
    return (
        <section id="home">
            <TopContainer />
            <MiddleContainer />
            <BottomContainer />
        </section>
    );
}

export default Home;
