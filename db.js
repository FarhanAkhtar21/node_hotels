const mongoose = require('mongoose');
require('dotenv').config();

// Define MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/hotels';
// const mongoURI = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event listeners for MongoDB connection events
db.on('connected', () => {
    console.log('Connected to MongoDB Server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error: ', err);
});

db.on('disconnected', () => {
    console.log('MongoDb disconnected');
});



// Export the database connection

module.exports = db;

