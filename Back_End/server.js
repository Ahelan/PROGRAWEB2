const mongoose = require('mongoose');
const multer = require('multer');


async function connect(){
    try {
        await mongoose.connect(
            'mongodb+srv://admin:admin@proyectospotify.zjjznpj.mongodb.net/?retryWrites=true&w=majority&appName=proyectoSpotify'
        );

        console.log('Connected to MongoDB')
      } catch (error) {
        console.log(error);
      }
}

connect();
