const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({

    setup: {
        type: String,
        required: [true, "Setup is required!"],
        minlength: [10, "Setup must be at least 10 characters long!"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required!"],
        minlength: [3, "The punchline must be at least 2 characters long!"]
    },
    },
{ timestamps: true }
);
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;