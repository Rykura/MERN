const mongoose = require('mongoose');
 
const NinjaSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First name is required!"],
        minlength: [2, "First name must be at least 2 characters long!"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required!"],
        minlength: [2, "Last name must be at least 2 characters long!"]
    },
    age: {
        type: Number,
        required: [true, "Age is required!"],
        min: [18, "You must be at least 18 years or older!"]
    },
    isFullTime: {
        type: Boolean
    }, 
    imgURL: {
        type: String,
        required: [true, "We need your face!"]
    }
    },
{ timestamps: true }
);
 
const Ninja = mongoose.model('Ninja', NinjaSchema);
 
module.exports = Ninja;