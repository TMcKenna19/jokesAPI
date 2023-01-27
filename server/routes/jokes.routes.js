const JokesController = require("../controllers/jokes.controller");

module.exports = app =>{
    //create
    app.post("/api/jokes/create", JokesController.createJokes);

    //read one 
    app.get("/api/jokes/:_id", JokesController.findOneJokes); 
    
    //read all
    app.get("/api/jokes", JokesController.findAllJokes);

    //update
    app.get("/api/jokes/update/:_id", JokesController.updateJokes);

    //delete
    app.delete("/app/jokes/delete/:_id", JokesController.deleteJokes);
}