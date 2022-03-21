const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    app.get("/api/jokes", JokeController.findAllJokes)
    app.get("/api/jokes/:id", JokeController.getOneJoke)
    app.get("/api/random", JokeController.randomJoke)
    app.post("/api/jokes/new", JokeController.createJoke)
    app.put("/api/jokes/update/:id", JokeController.updateJoke)
    app.delete("/api/jokes/delete/:id", JokeController.deleteOneJoke)
}