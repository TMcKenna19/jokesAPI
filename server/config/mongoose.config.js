// This file establishes out connection to the database

//bring in mongoose 
const mongoose = require("mongoose");

//we need to connect to our database
//make sure the name of your database is unique
mongoose.connect("mongodb://localhost/jokes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("I have found the mongoose!!"))
    .catch(err => console.log("I lost the mongoose!!", err))


//this will be the same everytime. Just change the db name 