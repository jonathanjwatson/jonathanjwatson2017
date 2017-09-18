require("dotenv").config();
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var Project = require('../models/project');

// Use native promises
mongoose.Promise = global.Promise;

Project.remove({}, (err) => console.log(err));

const blackjack = new Project({
    title: "Blackjack",
    description: ,
    tagline: "A single-deck game of skill and luck.",
    imgUrl: String,
    githubUrl: String,
    trelloUrl: String,
    siteUrl: String
});



popMusic.save().then(() => console.log("Category Saved!"));
game.save().then(() => console.log("Game Saved!"))

mongoose.connection.close();