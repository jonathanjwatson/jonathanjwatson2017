require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Project = require('../models/project');

// Use native promises
mongoose.Promise = global.Promise;

Project.remove({}, (err) => console.log(err));

const blackjack = new Project({
    title: "Blackjack",
    description: "For project one, I created a single-deck blackjack game. When players come to the site, they are greeted with a deal button which, when clicked, deals four cards at random. Two cards are the player's cards and are shown face up. Two cards are the dealer's cards, but only one is shown face up.",
    tagline: "A single-deck game of skill and luck.",
    imgUrl: "https://res.cloudinary.com/pictureswarm/image/upload/v1505759984/Blackjack_anemgy.jpg",
    githubUrl: "https://github.com/jwats287/blackjack",
    trelloUrl: "https://trello.com/b/pmZG1PhD/blackjack",
    siteUrl: "https://blackjack-monkey.herokuapp.com/"
});


blackjack.save().then(() => console.log("Project Saved!"))

mongoose.connection.close();