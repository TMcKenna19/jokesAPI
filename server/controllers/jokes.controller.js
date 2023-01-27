//We need to use the jokes model
const Jokes = require("../models/jokes.model");

// Now we set up out basic CRUD commands 

//CREATE
module.exports.createJokes = (req,res) => {
     Jokes.create(req.body)
        .then(newJokes => res.json(newJokes))
        .catch(err => res.json({message: "Somthing went wrong when finding a joke", err: err}))
}

//READ ONE
module.exports.findOneJokes = (req,res) => {
    Jokes.find({_id: req.params._id})
       .then(oneJokes => res.json(oneJokes))
       .catch(err => res.json({message: "Somthing went wrong when finding one joke", err: err}))
}

//READ ALL 
module.exports.findAllJokes = (req,res)=>{
   Jokes.find()
   .then(allJokes =>{
       res.json({results: allJokes })
   })
   .catch(err=>res.json({message:"Somthing went wrong when finding all jokes", err:err}))
}

//UPDATE
module.exports.updateJokes = (req,res) => {
    Jokes.findOneAndUpdate({_id: req.params._id}, req.body,)
       .then(updatedJokes => res.json(updatedJokes))
       .catch(err => res.json({message: "Somthing went wrong when updating one joke", err: err}))
}


//DELETE
module.exports.deleteJokes = (req,res) => {
    Jokes.deleteOne({_id: req.params._id})
       .then(deletedJokes => res.json(deletedJokes))
       .catch(err => res.json({message: "Somthing went wrong when deleting a joke", err: err}))
}