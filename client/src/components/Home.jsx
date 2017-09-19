import React, { Component } from 'react';
import PortfolioCarousel from './PortfolioCarousel';

class Home extends Component {
    render() {
        return (
            <div>
            <div className="splash-image">
            <div className="row">
                <div className="site-description">
                <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/000/2b6/122/332e953.jpg" />
                <p>Hi, I'm Jonathan. I am a full-stack Web Developer looking for new opportunities. I provide creative solutions and have an eye for detail. I like to help people. I believe in shipping first and iterating improvements, because the customer knows what they want.</p>
                </div>
                <PortfolioCarousel />
                <p>I spent the last three years doing front-end development as part of a Marketing team. Now, I create full-stack CRUD apps, RESTful routes, and elegant code.</p>
                <p>
                I work with: 
                <ul className="skills-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>ES6</li>
                <li>React</li>
                <li>Ruby on Rails</li>
                </ul>
                If you're looking for a freelance developer, message me at jonathan@agiledevelopmentconsulting.com. I'm always looking to meet new people. Feel free to reach out at dev.jonathanwatson@gmail.com. </p>
                </div>
                <div id="resume">
                <p>Download my resume here</p>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;