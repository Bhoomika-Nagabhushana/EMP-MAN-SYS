const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URL = process.env.MONGODB_LINK

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/ems');
        console.log(`MongoDb server connected ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`MongoDb server not connected ${error}`)
    }
}

module.exports = connectDb