const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get("/api/authors", AuthorController.findAllAuthors)
    app.get("/api/authors/:id", AuthorController.getOneAuthor)
    app.get("/api/random", AuthorController.randomAuthor)
    app.post("/api/authors/new", AuthorController.createAuthor)
    app.put("/api/authors/update/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/delete/:id", AuthorController.deleteOneAuthor)
}