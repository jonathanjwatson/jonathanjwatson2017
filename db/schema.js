const mongoose = require('mongoose');


const projectSchema = mongoose.Schema({
  title: String,
  description: String,
  tagline: String,
  imgUrl: String,
  githubUrl: String,
  trelloUrl: String,
  siteUrl: String
});



// projectSchema.pre('save', function(next){
//     now = new Date();
//     this.update_at = now;
//     if ( !this.registeredOn ) {
//       this.registeredOn = now;
//     }
//     next();
// })

const Project = mongoose.model('Project', projectSchema);

module.exports = {
  Project
}