const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  location: {
    type: String,
    required:true
  },
  status: {
    type: String
  },
  skills: {
    type: [String]
  },
  bio: {
    type: String
  }
  });
 
    
module.exports = Profile = mongoose.model('profile', ProfileSchema);
