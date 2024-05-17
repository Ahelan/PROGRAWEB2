const mongoose = require('mongoose');

const { Schema } = mongoose;

const User = mongoose.model('Users', new Schema({username: String, email: String, password: String, profilePicture: Buffer}));

module.exports = User;