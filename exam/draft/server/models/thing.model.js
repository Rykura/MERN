const mongoose = require('mongoose');
 
const THINGSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title must be at least 3 characters long!"]
    },
    price: {
        type: Number,
        required: [true, "Price is required!"],
        min: [1, "The price must be at least $1!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "The description must be at least 10 characters long!"]
    },
    },
{ timestamps: true }
);
 
const Thing = mongoose.model('Thing', THINGSchema);
 
module.exports = Thing;