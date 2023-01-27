//Bring in mongoose 
const mongoose = require("mongoose");

//we make our model 
const JokesSchema = new mongoose.Schema({
    joke: String,
    punchline: String
});

// Finalize setup 
const Jokes = mongoose.model("Jokes", JokesSchema);

//We need to export this model so we can use it in our project 
module.exports = Jokes;