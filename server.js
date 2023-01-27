const express = require("express");
const app = express();
const port = 8000;

//A connection to our config, which hooks up mongoose  
require("./server/config/mongoose.config");

//A line of code for handling post requests 
//This ling of code allows is to get req.body information 
//Make sure this lins is close to the top. Especially above routes. 
app.use(express.json(), express.urlencoded({extended:true}));

//A connection to our routes file
const AllMyRoutes = require("./server/routes/jokes.routes");
AllMyRoutes(app);


app.listen(port, ()=> console.log(`*** SUCCESS *** port ${port}`));
// npm init -y 
// npm i (install) express mongoose
