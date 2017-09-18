import React, { Component } from 'react';
import PortfolioCarousel from './PortfolioCarousel';

class Home extends Component {
    render() {
        return (
            <div className="splash-image">
                <h1>Jonathan J. Watson</h1>
                <h3>Full-Stack Web Developer</h3>
                <PortfolioCarousel />
            </div>
        );
    }
}

export default Home;