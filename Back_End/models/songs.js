const mongoose = require('mongoose');

const { Schema } = mongoose;

const SongSchema = new Schema({
    email: String,
    password: String,
    mp3: Buffer // Campo para almacenar el archivo mp3
});

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;