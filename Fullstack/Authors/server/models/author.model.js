const mongoose = require('mongoose');
 
const AuthorSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "First Name is required!"],
        minlength: [1, "First Name must be at least 1 character long!"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is required!"],
        minlength: [1, "Last Name must be at least 1 character long!"]
    },
    birthCountry: {
        type: String,
        required: [true, "Country is required!"],
        minlength: [4, "Country must be at least 4 characters long!"]
    },
    birthCity: {
        type: String,
        required: [true, "City is required!"],
        minlength: [1, "City must be at least 1 character long!"]
    },
    genre: {
        type: String,
        required: [true, "Genre is required!"],
        minlength: [3, "Genre must be at least 3 characters long!"]
    },
    picURL: {
        type: String,
        required: [true, "Picture URL is required!"],
        minlength: [10, "Picture URL must be at least 10 characters long!"]
    },
    },
{ timestamps: true }
);
 
const Author = mongoose.model('Author', AuthorSchema);
 
module.exports = Author;