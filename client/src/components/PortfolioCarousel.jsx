import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';

class PortfolioCarousel extends Component {
    constructor() {
        super();
        this.state = {
            projects: [{
                    title: "Blackjack",
                    description: "For project one, I created a single-deck blackjack game. When players come to the site, they are greeted with a deal button which, when clicked, deals four cards at random. Two cards are the player's cards and are shown face up. Two cards are the dealer's cards, but only one is shown face up.",
                    tagline: "A single-deck game of skill and luck.",
                    imgUrl: "https://res.cloudinary.com/pictureswarm/image/upload/v1505759984/Blackjack_anemgy.jpg",
                    githubUrl: "https://github.com/jonathanjwatson/blackjack",
                    trelloUrl: "https://trello.com/b/pmZG1PhD/blackjack",
                    siteUrl: "https://blackjack-monkey.herokuapp.com/"
                },
                {
                    title: "Portfolio Creator",
                    description: "For project two, our team created a portfolio generator. When users come to the site, they can create a user account, sign in, fill out a few short fields, which are converted into a styled portfolio page with custom URL.",
                    tagline: "A single-deck game of skill and luck.",
                    imgUrl: "https://res.cloudinary.com/pictureswarm/image/upload/v1505776533/Portfolio-Creator_xxq8dr.png",
                    githubUrl: "https://github.com/jonathanjwatson/portfolio-creator",
                    trelloUrl: "https://trello.com/b/DLemEGpQ/wdi-11-project-2",
                    siteUrl: "https://portfolio-creator.herokuapp.com/"
                },
                {
                    title: "Health and Wellness Tracker",
                    description: "For project three, I created a health and wellness tracker. Features include the ability to create new foods and add them to your day, as well as a daily water intake counter.",
                    tagline: "A single-deck game of skill and luck.",
                    imgUrl: "https://res.cloudinary.com/pictureswarm/image/upload/v1505776864/Screen_Shot_2017-09-18_at_7.20.22_PM_djszbs.png",
                    githubUrl: "https://github.com/jonathanjwatson/health-wellness-tracker",
                    trelloUrl: "https://trello.com/b/xf9cVocq/health-tracking",
                    siteUrl: "https://health-wellness-tracker.herokuapp.com/"
                },
                {
                    title: "Picture Swarm",
                    description: "Picture Swarm is a user-generated stock photography site. For my capstone project, I created a React on Rails application. This project focuses on User States and includes Not Signed In, Basic User, Uploader, and Admin accounts, made possible by Devise authentication.",
                    tagline: "A single-deck game of skill and luck.",
                    imgUrl: "https://res.cloudinary.com/pictureswarm/image/upload/v1505777291/Screen_Shot_2017-09-18_at_7.27.44_PM_k0v0mp.png",
                    githubUrl: "https://github.com/jonathanjwatson/picture-swarm",
                    trelloUrl: "https://trello.com/b/o5BEvcB9/picture-swarm",
                    siteUrl: "https://picture-swarm.herokuapp.com/"
                }
            ],
            active: 1
        }
    }
    render() {
        return (
            <div id="Projects">
            
            <StyleRoot>
            <h3>Portfolio Projects</h3>
                <Coverflow
                        media={{
                            '@media (max-width: 900px)': {
                                width: '90%',
                                height: '300px'
                            },
                            '@media (min-width: 900px)': {
                                width: '90%',
                                height: '600px'
                            }
                            }}
                        displayQuantityOfSide={1}
                        navigation={true}
                        enableHeading={false}
                        active={this.state.active}
                        clickable={true} >
                    {this.state.projects.map((project, index) => (
                        
                    <div key={index} data-action={project.siteUrl}>
                            
                            <img src={project.imgUrl} width="100%"/>
                            <div className="game-list">
                                <a href={project.siteUrl} target="_blank">
                                {project.title}
                                </a>
                            </div>
                            
                    </div>
                    ))} 
                    </Coverflow>
                    </StyleRoot>
            </div>
        );
    }
}

export default PortfolioCarousel;