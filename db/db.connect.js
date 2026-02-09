const mongoose = require('mongoose')
require('dotenv').config()

const mongoUrl = process.env.MONGODB

const initializeDatbase = async () => {
    mongoose
    .connect(mongoUrl)
    .then(() => {
        console.log('Connected to Database')
    })
    .catch((error) => console.log('Error in Connecting to Database', error))
}

module.exports = { initializeDatbase };

