const NinjaController = require('../controllers/ninja.controller');

module.exports = (app) => {
    app.get("/api/hello", NinjaController.helloWorld)
    app.get("/api/ninjas", NinjaController.findAllNinjas)
    app.post("/api/ninjas", NinjaController.createNinja)
    app.get("/api/ninjas/:id", NinjaController.getOneNinja)
    app.put("/api/ninja/:id", NinjaController.updateNinja)
    app.delete("/api/ninja/:id", NinjaController.deleteOneNinja)
}