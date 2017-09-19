import React, { Component } from 'react';
import PortfolioCarousel from './PortfolioCarousel';
import ContactForm from './ContactForm';

class Home extends Component {
    render() {
        return (
            <div>
            <div>
                <div className="splash-image bio">
                    <div className="row">
                        <div className="site-description">
                            <img src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/5/000/2b6/122/332e953.jpg" />
                            <p>Hi, I'm Jonathan. I am a full-stack Web Developer looking for new opportunities. I provide creative solutions and have an eye for detail. I like to help people. I believe in shipping first and iterating improvements, because the customer knows what they want.</p>
                        </div>
                    </div>
                </div>
                <div className="splash-image projects">
                    <div className="row">
                        <PortfolioCarousel />
                    </div>
                </div>
                <div className="splash-image skills">
                    <p>I spent the last three years doing front-end development as part of a marketing team. Now, I create full-stack CRUD apps, RESTful routes, and elegant code.</p>
                    <h4>I work with: </h4>
                    <div className="row">
                        <p>React &bull; Node.JS &bull; Express &bull; MongoDB &bull; PostgreSQL &bull; Ruby &bull; Rails &bull; HTML &bull; CSS &bull; JavaScript &bull; JQuery
                            <br />
                        </p>
                    </div>
                </div>
                <div className="splash-image hire">
                    <div className="row">
                        <h4>Looking to Hire?</h4>
                        <p>If you're looking for a freelance developer, message me at jonathan@agiledevelopmentconsulting.com. I'm always looking to meet new people. Feel free to reach out at dev.jonathanwatson@gmail.com. 
                            <br />
                            Or, fill out the form below.
                        </p>
                    </div>
                    <div id="resume">
                    <p className="button button-primary">Download my resume here</p>
                </div>
                </div>
            </div>
            <div className="row contact">
            <ContactForm />
            </div>
            </div>
        );
    }
}

export default Home;