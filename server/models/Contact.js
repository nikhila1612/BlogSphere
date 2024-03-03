// Import the mongoose library
const mongoose = require('mongoose');

// Destructure the Schema object from mongoose
// Allows direct access to Schema without accessing it through the mongoose object.
const { Schema } = mongoose;
// Define a Mongoose Schema for Contact
const ContactSchema = new Schema({
    name: {
        type: String,
        unique: false,
        required:true
    },

    email: {
        type: String,
        required: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
    },
    message:{ 
        type: String,
        unique: false,
        required:true
    }
});

module.exports = mongoose.model('Contact', ContactSchema);
